import { NextRequest, NextResponse } from 'next/server';

const rateLimitMap = new Map<string, number[]>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60000;
  const maxRequests = 30;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }

  const requests = rateLimitMap.get(ip)!;
  const recentRequests = requests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

function extractReelId(url: string): string | null {
  const patterns = [
    /instagram\.com\/reel\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/p\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/tv\/([A-Za-z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Helper function to retry with exponential backoff
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 1000
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    
    console.log(`⏳ Retrying in ${delay}ms... (${retries} attempts left)`);
    await new Promise(resolve => setTimeout(resolve, delay));
    
    return retryWithBackoff(fn, retries - 1, delay * 2);
  }
}

// METHOD 1: RapidAPI Instagram Reels Downloader
async function downloadViaInstagramReelsAPI(url: string) {
  const apiKey = process.env.RAPIDAPI_KEY;
  
  if (!apiKey) {
    throw new Error('API key not configured');
  }

  console.log('🔑 Method 1: Using RapidAPI Instagram Reels Downloader...');

  const apiUrl = `https://instagram-reels-downloader-api.p.rapidapi.com/download?url=${encodeURIComponent(url)}`;
  
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'instagram-reels-downloader-api.p.rapidapi.com',
    },
  });

  console.log('📡 API Response Status:', response.status);

  if (!response.ok) {
    throw new Error(`API returned status ${response.status}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || 'API returned unsuccessful response');
  }

  let videoUrl = '';
  let thumbnail = result.data?.thumbnail || '';
  let title = result.data?.title || '';

  // Try multiple fields
  if (result.data?.medias && Array.isArray(result.data.medias)) {
    const videoMedia = result.data.medias.find((media: any) => media.type === 'video');
    if (videoMedia?.url) videoUrl = videoMedia.url;
  }

  if (!videoUrl && result.data?.url) videoUrl = result.data.url;
  if (!videoUrl && result.data?.download_url) videoUrl = result.data.download_url;
  if (!videoUrl && result.data?.video_url) videoUrl = result.data.video_url;

  if (!videoUrl || !videoUrl.startsWith('http')) {
    throw new Error('No valid video URL found');
  }

  console.log('✅ Method 1 successful!');

  return {
    url: videoUrl,
    thumbnail,
    title,
    author: result.data?.author || '',
    duration: result.data?.duration || 0,
  };
}

// METHOD 2: Direct Instagram API
async function downloadViaDirect(reelId: string) {
  console.log('🔄 Method 2: Trying Direct Instagram API...');
  
  const directUrl = `https://www.instagram.com/p/${reelId}/?__a=1&__d=dis`;
  
  const response = await fetch(directUrl, {
    headers: {
      'User-Agent': 'Instagram 219.0.0.12.117 Android (23/6.0.1; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.5',
      'X-IG-App-ID': '936619743392459',
      'X-ASBD-ID': '198387',
      'X-IG-WWW-Claim': '0',
    },
  });

  if (!response.ok) {
    throw new Error(`Direct API failed: ${response.status}`);
  }

  const data = await response.json();
  
  const paths = [
    data?.items?.[0]?.video_versions?.[0]?.url,
    data?.graphql?.shortcode_media?.video_url,
    data?.video_url,
  ];

  for (const videoUrl of paths) {
    if (videoUrl && typeof videoUrl === 'string' && videoUrl.startsWith('http')) {
      console.log('✅ Method 2 successful!');
      
      return {
        url: videoUrl,
        thumbnail: data?.items?.[0]?.image_versions2?.candidates?.[0]?.url || '',
        title: data?.items?.[0]?.caption?.text || '',
      };
    }
  }

  throw new Error('No video URL in Direct API');
}

// METHOD 3: GraphQL API
async function downloadViaGraphQL(reelId: string) {
  console.log('🔄 Method 3: Trying GraphQL API...');
  
  const graphqlUrl = `https://www.instagram.com/graphql/query/?query_hash=9f8827793ef34641b2fb195d4d41151c&variables=${encodeURIComponent(JSON.stringify({ shortcode: reelId }))}`;
  
  const response = await fetch(graphqlUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Accept': '*/*',
      'X-IG-App-ID': '936619743392459',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  if (!response.ok) {
    throw new Error(`GraphQL failed: ${response.status}`);
  }

  const data = await response.json();
  
  const videoUrl = data?.data?.shortcode_media?.video_url;
  
  if (videoUrl && videoUrl.startsWith('http')) {
    console.log('✅ Method 3 successful!');
    
    return {
      url: videoUrl,
      thumbnail: data?.data?.shortcode_media?.display_url || '',
      title: data?.data?.shortcode_media?.edge_media_to_caption?.edges?.[0]?.node?.text || '',
    };
  }

  throw new Error('No video URL in GraphQL');
}

// METHOD 4: Embed Scraping
async function downloadViaEmbed(reelId: string) {
  console.log('🔄 Method 4: Trying Embed Scraping...');
  
  const embedUrl = `https://www.instagram.com/p/${reelId}/embed/captioned/`;
  
  const response = await fetch(embedUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
      'Referer': 'https://www.instagram.com/',
    },
  });

  if (!response.ok) {
    throw new Error(`Embed failed: ${response.status}`);
  }

  const html = await response.text();

  const patterns = [
    /"video_url":"([^"]+)"/,
    /"src":"([^"]+\.mp4[^"]*)"/,
    /video_url\\":\\"([^"\\]+)\\"/,
    /"playback_url":"([^"]+)"/,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      const videoUrl = match[1]
        .replace(/\\u0026/g, '&')
        .replace(/\\\//g, '/')
        .replace(/\\"/g, '"')
        .replace(/&amp;/g, '&');

      if (videoUrl.startsWith('http')) {
        console.log('✅ Method 4 successful!');

        const thumbMatch = html.match(/"display_url":"([^"]+)"/);
        const thumbnail = thumbMatch ? thumbMatch[1]
          .replace(/\\u0026/g, '&')
          .replace(/\\\//g, '/')
          : '';

        return {
          url: videoUrl,
          thumbnail,
          title: '',
        };
      }
    }
  }

  throw new Error('No video URL in embed');
}

// MAIN HANDLER
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait a moment.' },
        { status: 429 }
      );
    }

    const { url } = await request.json();

    if (!url || !url.includes('instagram.com')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid Instagram URL' },
        { status: 400 }
      );
    }

    const reelId = extractReelId(url);
    if (!reelId) {
      return NextResponse.json(
        { success: false, error: 'Could not extract reel ID from URL' },
        { status: 400 }
      );
    }

    console.log('\n========================================');
    console.log('🎬 NEW REQUEST - Reel ID:', reelId);
    console.log('========================================\n');

    // Try all methods with retry logic
    const methods = [
      { name: 'RapidAPI', fn: () => downloadViaInstagramReelsAPI(url) },
      { name: 'Direct API', fn: () => downloadViaDirect(reelId) },
      { name: 'GraphQL', fn: () => downloadViaGraphQL(reelId) },
      { name: 'Embed Scraping', fn: () => downloadViaEmbed(reelId) },
    ];

    for (const method of methods) {
      try {
        // Retry each method up to 2 times
        const videoData = await retryWithBackoff(method.fn, 2, 500);
        
        console.log(`\n✅ SUCCESS with ${method.name}!\n`);
        
        return NextResponse.json({
          success: true,
          data: videoData,
          method: method.name,
        });
      } catch (error: any) {
        console.log(`❌ ${method.name} failed:`, error.message);
        continue;
      }
    }

    // All methods failed
    console.log('\n❌ All methods exhausted\n');
    
    return NextResponse.json({
      success: false,
      error: 'Unable to fetch this Reel. Please ensure it is public and try again in a moment.',
      suggestion: 'The Reel might be temporarily unavailable. Please try refreshing or use a different Reel.',
    }, { status: 500 });

  } catch (error: any) {
    console.error('\n💥 CRITICAL ERROR:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process video. Please try again.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
