// app/api/download/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Route segment config for better timeout handling
export const runtime = 'nodejs';
export const maxDuration = 30; // 30 seconds for video fetching

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
  // Clean URL - remove query params and fragments
  const cleanUrl = url.split('?')[0].split('#')[0];
  
  const patterns = [
    /instagram\.com\/reel\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/p\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/tv\/([A-Za-z0-9_-]+)/,
    /instagram\.com\/reels\/([A-Za-z0-9_-]+)/,
  ];

  for (const pattern of patterns) {
    const match = cleanUrl.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
}

// Helper function to create fetch with timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 30000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - Instagram took too long to respond');
    }
    throw error;
  }
}

// PRIMARY: RapidAPI Instagram Reels Downloader
async function downloadViaRapidAPI(url: string) {
  // Use environment variable or fallback to provided key
  const apiKey = process.env.RAPIDAPI_KEY || '45be548deamshed22ae0026dd16fp1a5ac6jsn060fcbe67470';
  
  if (!apiKey) {
    throw new Error('RAPIDAPI_KEY not configured');
  }

  try {
    console.log('🔑 Method 1: RapidAPI Instagram Reels Downloader');
    
    const apiUrl = `https://instagram-reels-downloader-api.p.rapidapi.com/download?url=${encodeURIComponent(url)}`;
    
    const response = await fetchWithTimeout(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'instagram-reels-downloader-api.p.rapidapi.com',
      },
    }, 25000);

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('RapidAPI error response:', errorText);
      throw new Error(`API status ${response.status}: ${errorText.substring(0, 100)}`);
    }

    let result;
    try {
      result = await response.json();
    } catch (jsonError: any) {
      console.error('Failed to parse RapidAPI JSON:', jsonError);
      throw new Error('Invalid JSON response from RapidAPI');
    }

    if (!result || !result.success) {
      throw new Error(result?.message || 'API unsuccessful');
    }

    // Extract video URL
    let videoUrl = '';
    let thumbnail = result.data?.thumbnail || '';

    if (result.data?.medias && Array.isArray(result.data.medias)) {
      const videoMedia = result.data.medias.find((media: any) => media.type === 'video');
      if (videoMedia?.url) {
        videoUrl = videoMedia.url;
      }
    }

    if (!videoUrl && result.data?.url) {
      videoUrl = result.data.url;
    }

    if (!videoUrl && result.data?.download_url) {
      videoUrl = result.data.download_url;
    }

    if (!videoUrl) {
      throw new Error('No video URL in response');
    }

    console.log('✅ RapidAPI Success!');

    return {
      url: videoUrl,
      thumbnail: thumbnail,
      title: result.data?.title || '',
    };

  } catch (error: any) {
    console.error('❌ RapidAPI failed:', error.message);
    throw error;
  }
}

// FALLBACK 1: Instagram Graph / oEmbed
async function downloadViaOEmbed(reelId: string) {
  try {
    console.log('🌐 Method 2: Instagram oEmbed API');
    
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    ];
    
    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    
    const oembed = await fetchWithTimeout(`https://www.instagram.com/p/${reelId}/embed/captioned/`, {
      headers: {
        'User-Agent': randomUserAgent,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.instagram.com/',
        'Accept-Encoding': 'gzip, deflate, br',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Upgrade-Insecure-Requests': '1',
      },
    }, 25000);
    
    if (!oembed.ok) {
      const errorText = await oembed.text().catch(() => '');
      console.error(`oEmbed status: ${oembed.status}`, errorText.substring(0, 200));
      throw new Error(`oEmbed failed: ${oembed.status}`);
    }

    let html: string;
    try {
      html = await oembed.text();
    } catch (textError: any) {
      console.error('Failed to read oEmbed response:', textError.message);
      throw new Error('Failed to read oEmbed response');
    }

    const patterns = [
      /"video_url":"([^"]+)"/,
      /"src":"([^"]+\.mp4[^"]*)"/,
      /video_url\\":\\"([^"\\]+)\\"/,
      /"playback_url":"([^"]+)"/,
      /"videoUrl":"([^"]+)"/,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        let videoUrl = match[1]
          .replace(/\\u0026/g, '&')
          .replace(/\\\//g, '/')
          .replace(/\\"/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/\\u003C/g, '<')
          .replace(/\\u003E/g, '>');

        // Validate URL
        if (!videoUrl.startsWith('http')) {
          continue;
        }

        const thumbMatch = html.match(/"display_url":"([^"]+)"/);
        const thumbnail = thumbMatch?.[1]
          ?.replace(/\\u0026/g, '&')
          .replace(/\\\//g, '/') || '';

        console.log('✅ oEmbed Success!');
        
        return {
          url: videoUrl,
          thumbnail,
          title: '',
        };
      }
    }

    throw new Error('No video in oEmbed');
  } catch (error: any) {
    console.error('❌ oEmbed failed:', error.message);
    throw error;
  }
}

// FALLBACK 2: Instagram JSON API endpoint
async function downloadViaJSONAPI(reelId: string) {
  try {
    console.log('📡 Method 3: Instagram JSON API');
    
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    ];
    
    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
    
    // Try Instagram's public JSON endpoint
    const jsonUrl = `https://www.instagram.com/p/${reelId}/?__a=1&__d=dis`;
    
    const response = await fetchWithTimeout(jsonUrl, {
      headers: {
        'User-Agent': randomUserAgent,
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.instagram.com/',
        'X-Requested-With': 'XMLHttpRequest',
        'X-IG-App-ID': '936619743392459',
      },
    }, 20000);
    
    if (response.ok) {
      try {
        const text = await response.text();
        if (!text || text.trim().length === 0) {
          throw new Error('Empty response from JSON API');
        }
        
        const data = JSON.parse(text);
        const videoUrl = data?.items?.[0]?.video_versions?.[0]?.url ||
                        data?.graphql?.shortcode_media?.video_url ||
                        data?.shortcode_media?.video_url;
        
        if (videoUrl) {
          const thumbnail = data?.items?.[0]?.image_versions2?.candidates?.[0]?.url ||
                           data?.graphql?.shortcode_media?.display_url ||
                           '';
          
          console.log('✅ JSON API Success!');
          return {
            url: videoUrl,
            thumbnail,
            title: '',
          };
        }
      } catch (e: any) {
        console.error('JSON API parse error:', e.message);
        // Not JSON or invalid JSON, continue
      }
    }
    
    throw new Error('JSON API failed');
  } catch (error: any) {
    console.error('❌ JSON API failed:', error.message);
    throw error;
  }
}

// FALLBACK 3: Direct Instagram page scraping
async function downloadViaDirectScrape(reelId: string) {
  try {
    console.log('🔍 Method 3: Direct Page Scraping');
    
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    ];
    
    // Try both /p/ and /reel/ endpoints
    const urls = [
      `https://www.instagram.com/p/${reelId}/`,
      `https://www.instagram.com/reel/${reelId}/`,
    ];
    
    let html = '';
    let lastError: Error | null = null;
    
    for (const fetchUrl of urls) {
      try {
        console.log(`Trying URL: ${fetchUrl}`);
        const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
        
        const response = await fetchWithTimeout(fetchUrl, {
          headers: {
            'User-Agent': randomUserAgent,
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Referer': 'https://www.instagram.com/',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Upgrade-Insecure-Requests': '1',
            'DNT': '1',
          },
        }, 30000);
        
        if (response.ok) {
          try {
            html = await response.text();
            if (html && html.length > 1000) { // Ensure we got actual content
              console.log(`✅ Successfully fetched ${fetchUrl}, HTML length: ${html.length}`);
              break;
            } else {
              console.warn(`⚠️  Got response but HTML too short: ${html?.length || 0} chars`);
              lastError = new Error(`Response too short: ${html?.length || 0} chars`);
            }
          } catch (textError: any) {
            console.error(`Failed to read response from ${fetchUrl}:`, textError.message);
            lastError = new Error(`Failed to read response: ${textError.message}`);
          }
        } else {
          const statusText = response.statusText || 'Unknown';
          const errorBody = await response.text().catch(() => '').then(t => t.substring(0, 200));
          console.error(`❌ Failed to fetch ${fetchUrl}: ${response.status} ${statusText}`, errorBody);
          lastError = new Error(`Failed with status ${response.status}: ${statusText}`);
        }
      } catch (err: any) {
        lastError = err;
        console.error(`Error fetching ${fetchUrl}:`, err.message, err.stack?.substring(0, 200));
        continue;
      }
    }
    
    if (!html || html.length < 1000) {
      const errorMsg = lastError?.message || 'Failed to fetch page from both URLs';
      console.error(`❌ No valid HTML content. Error: ${errorMsg}, HTML length: ${html?.length || 0}`);
      throw lastError || new Error('Failed to fetch page from both URLs');
    }

    console.log(`📄 HTML content received: ${html.length} characters`);

    // Try to find video URL in page source with more patterns
    const patterns = [
      /"video_url":"([^"]+)"/,
      /"videoUrl":"([^"]+)"/,
      /"src":"(https:\/\/[^"]+\.mp4[^"]*)"/,
      /og:video" content="([^"]+)"/,
      /"playback_url":"([^"]+)"/,
      /video_url\\":\\"([^"\\]+)\\"/,
      /"video_versions":\[{"url":"([^"]+)"/,
      /"url":"(https:\/\/[^"]*\.mp4[^"]*)"/,
      /"video_url":"(https:\/\/[^"]+)"/,
      /window\._sharedData\s*=\s*({.+?});/,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        let videoUrl = match[1]
          .replace(/\\u0026/g, '&')
          .replace(/\\\//g, '/')
          .replace(/\\"/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/\\u003C/g, '<')
          .replace(/\\u003E/g, '>')
          .trim();

        // Validate URL
        if (!videoUrl.startsWith('http')) {
          continue;
        }

        // Try to extract from window._sharedData if we got JSON
        if (pattern.toString().includes('_sharedData')) {
          try {
            const jsonData = JSON.parse(match[1]);
            const entryData = jsonData?.entry_data?.PostPage?.[0]?.graphql?.shortcode_media;
            if (entryData?.video_url) {
              videoUrl = entryData.video_url;
            } else if (entryData?.video_versions?.[0]?.url) {
              videoUrl = entryData.video_versions[0].url;
            }
          } catch (e: any) {
            console.warn('Failed to parse _sharedData JSON:', e.message);
            // Not JSON, continue with extracted URL
          }
        }

        const thumbMatch = html.match(/"og:image" content="([^"]+)"/) || 
                          html.match(/"display_url":"([^"]+)"/);
        const thumbnail = thumbMatch?.[1]?.replace(/\\u0026/g, '&').replace(/\\\//g, '/') || '';

        console.log('✅ Direct Scrape Success!');

        return {
          url: videoUrl,
          thumbnail,
          title: '',
        };
      }
    }

    throw new Error('No video found in page');
  } catch (error: any) {
    console.error('❌ Direct Scrape failed:', error.message);
    throw error;
  }
}

// MAIN HANDLER
export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait.' },
        { status: 429 }
      );
    }

    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'URL is required' },
        { status: 400 }
      );
    }

    if (!url.includes('instagram.com')) {
      return NextResponse.json(
        { success: false, error: 'Invalid Instagram URL' },
        { status: 400 }
      );
    }

    const reelId = extractReelId(url);
    if (!reelId) {
      return NextResponse.json(
        { success: false, error: 'Could not extract reel ID' },
        { status: 400 }
      );
    }

    console.log('\n========================================');
    console.log('🎬 NEW REQUEST');
    console.log('🆔 Reel ID:', reelId);
    console.log('🌐 URL:', url);
    console.log('📍 IP:', ip);
    console.log('🔧 Environment:', process.env.NODE_ENV);
    console.log('========================================\n');

    // Try all methods in sequence (skip RapidAPI if key not configured)
    const methods = [];
    
    // Only add RapidAPI if key is configured
    if (process.env.RAPIDAPI_KEY) {
      methods.push({ name: 'RapidAPI', fn: () => downloadViaRapidAPI(url) });
    }
    
    // Always try fallback methods - try multiple approaches
    methods.push({ name: 'DirectScrape', fn: () => downloadViaDirectScrape(reelId) });
    methods.push({ name: 'JSONAPI', fn: () => downloadViaJSONAPI(reelId) });
    methods.push({ name: 'OEmbed', fn: () => downloadViaOEmbed(reelId) });

    let lastError: any = null;
    const errors: string[] = [];

    for (const method of methods) {
      try {
        console.log(`\n🔄 Trying ${method.name}...`);
        const videoData = await method.fn();
        
        // Validate video URL before returning
        if (!videoData || typeof videoData !== 'object') {
          throw new Error('Invalid response format');
        }
        
        if (!videoData.url || typeof videoData.url !== 'string' || !videoData.url.startsWith('http')) {
          throw new Error('Invalid video URL returned');
        }
        
        console.log(`\n✅ SUCCESS with ${method.name}!\n`);
        
        return NextResponse.json({
          success: true,
          data: videoData,
        });
      } catch (error: any) {
        const errorMsg = error?.message || 'Unknown error';
        lastError = error;
        errors.push(`${method.name}: ${errorMsg}`);
        console.log(`⚠️  ${method.name} failed: ${errorMsg}`);
        if (error?.stack) {
          console.log(`Stack trace: ${error.stack.substring(0, 300)}`);
        }
        console.log('');
        continue;
      }
    }

    // All methods failed - return with reelId for client-side fallback
    console.log('\n❌ All server-side methods failed\n');
    console.log('Errors:', errors.join(' | '));
    
    // Return error with reelId so client can try client-side extraction
    const errorMessage = 'Could not fetch video. Please try again or check if the post is public.';
    
    return NextResponse.json(
      { 
        success: false,
        error: errorMessage,
        reelId: reelId, // Provide reelId for client-side fallback
        clientSideFallback: true, // Signal to use client-side extraction
        ...(process.env.NODE_ENV === 'development' && {
          debug: {
            methodsAttempted: methods.length,
            errors: errors,
            reelId: reelId,
          }
        }),
      },
      { status: 500 }
    );

  } catch (error: any) {
    console.error('\n💥 CRITICAL ERROR:', error);
    console.error('Error stack:', error.stack);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred. Please try again.',
        ...(process.env.NODE_ENV === 'development' && {
          debug: {
            error: error.message,
            name: error.name,
          }
        }),
      },
      { status: 500 }
    );
  }
}

// import { NextRequest, NextResponse } from 'next/server';

// const rateLimitMap = new Map<string, number[]>();

// function rateLimit(ip: string): boolean {
//   const now = Date.now();
//   const windowMs = 60000;
//   const maxRequests = 30;

//   if (!rateLimitMap.has(ip)) {
//     rateLimitMap.set(ip, []);
//   }

//   const requests = rateLimitMap.get(ip)!;
//   const recentRequests = requests.filter((time) => now - time < windowMs);

//   if (recentRequests.length >= maxRequests) {
//     return false;
//   }

//   recentRequests.push(now);
//   rateLimitMap.set(ip, recentRequests);
//   return true;
// }

// function extractReelId(url: string): string | null {
//   const patterns = [
//     /instagram\.com\/reel\/([A-Za-z0-9_-]+)/,
//     /instagram\.com\/p\/([A-Za-z0-9_-]+)/,
//     /instagram\.com\/tv\/([A-Za-z0-9_-]+)/,
//   ];

//   for (const pattern of patterns) {
//     const match = url.match(pattern);
//     if (match) return match[1];
//   }
//   return null;
// }

// // ============================================================================
// // PRIMARY METHOD: Instagram Reels Downloader API
// // This uses the EXACT API from your RapidAPI subscription
// // ============================================================================
// async function downloadViaInstagramReelsAPI(url: string) {
//   const apiKey = process.env.RAPIDAPI_KEY;
  
//   if (!apiKey) {
//     throw new Error('API key not configured');
//   }

//   try {
//     console.log('🔑 Using Instagram Reels Downloader API...');
//     console.log('📎 URL:', url);

//     const apiUrl = `https://instagram-reels-downloader-api.p.rapidapi.com/download?url=${encodeURIComponent(url)}`;
    
//     const response = await fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': apiKey,
//         'x-rapidapi-host': 'instagram-reels-downloader-api.p.rapidapi.com',
//       },
//     });

//     console.log('📡 API Response Status:', response.status);

//     if (!response.ok) {
//       throw new Error(`API returned status ${response.status}`);
//     }

//     const result = await response.json();
//     console.log('📦 API Response received');

//     // Check if response is successful
//     if (!result.success) {
//       throw new Error(result.message || 'API returned unsuccessful response');
//     }

//     // Extract video URL from response
//     let videoUrl = '';
//     let thumbnail = result.data?.thumbnail || '';
//     let title = result.data?.title || '';

//     // Method 1: Check medias array for video
//     if (result.data?.medias && Array.isArray(result.data.medias)) {
//       const videoMedia = result.data.medias.find((media: any) => media.type === 'video');
//       if (videoMedia && videoMedia.url) {
//         videoUrl = videoMedia.url;
//         console.log('✅ Found video in medias array');
//       }
//     }

//     // Method 2: Check direct URL field
//     if (!videoUrl && result.data?.url) {
//       videoUrl = result.data.url;
//       console.log('✅ Found video in direct URL field');
//     }

//     // Method 3: Check if there's a download_url
//     if (!videoUrl && result.data?.download_url) {
//       videoUrl = result.data.download_url;
//       console.log('✅ Found video in download_url field');
//     }

//     if (!videoUrl) {
//       console.error('❌ No video URL found in response');
//       throw new Error('No video URL found in API response');
//     }

//     console.log('🎉 Video URL extracted successfully!');

//     return {
//       url: videoUrl,
//       thumbnail: thumbnail,
//       title: title,
//       author: result.data?.author || '',
//       duration: result.data?.duration || 0,
//       views: result.data?.view_count || 0,
//       likes: result.data?.like_count || 0,
//     };

//   } catch (error: any) {
//     console.error('❌ Instagram Reels API failed:', error.message);
//     throw error;
//   }
// }

// // ============================================================================
// // FALLBACK METHOD: Direct Instagram Embed Scraping
// // ============================================================================
// async function downloadViaEmbed(reelId: string) {
//   try {
//     console.log('🌐 Trying direct embed scraping...');
    
//     const embedUrl = `https://www.instagram.com/p/${reelId}/embed/captioned/`;
    
//     const response = await fetch(embedUrl, {
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
//         'Accept': 'text/html,application/xhtml+xml',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Embed fetch failed');
//     }

//     const html = await response.text();

//     const patterns = [
//       /"video_url":"([^"]+)"/,
//       /"src":"([^"]+\.mp4[^"]*)"/,
//       /video_url\\":\\"([^"\\]+)\\"/,
//     ];

//     for (const pattern of patterns) {
//       const match = html.match(pattern);
//       if (match && match[1]) {
//         const videoUrl = match[1]
//           .replace(/\\u0026/g, '&')
//           .replace(/\\\//g, '/')
//           .replace(/\\"/g, '"')
//           .replace(/&amp;/g, '&');

//         const thumbMatch = html.match(/"display_url":"([^"]+)"/);
//         const thumbnail = thumbMatch ? thumbMatch[1]
//           .replace(/\\u0026/g, '&')
//           .replace(/\\\//g, '/')
//           : '';

//         console.log('✅ Embed scraping successful!');
        
//         return {
//           url: videoUrl,
//           thumbnail,
//           title: '',
//         };
//       }
//     }

//     throw new Error('Could not extract video from embed');
//   } catch (error: any) {
//     console.error('❌ Embed scraping failed:', error.message);
//     throw error;
//   }
// }

// // ============================================================================
// // MAIN API HANDLER
// // ============================================================================
// export async function POST(request: NextRequest) {
//   try {
//     const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

//     if (!rateLimit(ip)) {
//       return NextResponse.json(
//         { success: false, error: 'Too many requests. Please wait a moment.' },
//         { status: 429 }
//       );
//     }

//     const { url } = await request.json();

//     // Validation
//     if (!url) {
//       return NextResponse.json(
//         { success: false, error: 'URL is required' },
//         { status: 400 }
//       );
//     }

//     if (!url.includes('instagram.com')) {
//       return NextResponse.json(
//         { success: false, error: 'Please provide a valid Instagram URL' },
//         { status: 400 }
//       );
//     }

//     const reelId = extractReelId(url);
//     if (!reelId) {
//       return NextResponse.json(
//         { success: false, error: 'Could not extract reel ID from URL' },
//         { status: 400 }
//       );
//     }

//     console.log('\n========================================');
//     console.log('🎬 NEW REQUEST');
//     console.log('========================================');
//     console.log('🆔 Reel ID:', reelId);
//     console.log('📎 Full URL:', url);
//     console.log('========================================\n');

//     // Try primary method first
//     try {
//       const videoData = await downloadViaInstagramReelsAPI(url);
      
//       console.log('\n✅ SUCCESS!\n');
      
//       return NextResponse.json({
//         success: true,
//         data: videoData,
//         method: 'Instagram Reels Downloader API',
//       });
//     } catch (primaryError: any) {
//       console.log('\n⚠️  Primary method failed, trying fallback...\n');
      
//       // Try fallback method
//       try {
//         const videoData = await downloadViaEmbed(reelId);
        
//         console.log('\n✅ SUCCESS with fallback!\n');
        
//         return NextResponse.json({
//           success: true,
//           data: videoData,
//           method: 'Embed Scraping',
//         });
//       } catch (fallbackError: any) {
//         console.log('\n❌ All methods failed\n');
        
//         // Return client-side fallback
//         return NextResponse.json({
//           success: true,
//           data: {
//             url: `https://www.instagram.com/p/${reelId}/`,
//             thumbnail: `https://www.instagram.com/p/${reelId}/media/?size=l`,
//             title: '',
//             isClientSide: true,
//           },
//           message: 'Video loaded. You can view and download manually by right-clicking the video.',
//         });
//       }
//     }

//   } catch (error: any) {
//     console.error('\n💥 CRITICAL ERROR:', error);
//     console.error('Stack:', error.stack);
    
//     return NextResponse.json(
//       { 
//         success: false, 
//         error: 'Failed to process video. Please try again.',
//         details: process.env.NODE_ENV === 'development' ? error.message : undefined
//       },
//       { status: 500 }
//     );
//   }
// }