// app/api/download/route.ts
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

// PRIMARY: RapidAPI Instagram Reels Downloader
async function downloadViaRapidAPI(url: string) {
  const apiKey = process.env.RAPIDAPI_KEY;
  
  if (!apiKey) {
    throw new Error('API key not configured');
  }

  try {
    console.log('🔑 Method 1: RapidAPI Instagram Reels Downloader');
    
    const apiUrl = `https://instagram-reels-downloader-api.p.rapidapi.com/download?url=${encodeURIComponent(url)}`;
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'instagram-reels-downloader-api.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      throw new Error(`API status ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'API unsuccessful');
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
    
    const oembed = await fetch(`https://www.instagram.com/p/${reelId}/embed/captioned/`);
    
    if (!oembed.ok) throw new Error('oEmbed failed');

    const html = await oembed.text();

    const patterns = [
      /"video_url":"([^"]+)"/,
      /"src":"([^"]+\.mp4[^"]*)"/,
      /video_url\\":\\"([^"\\]+)\\"/,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        const videoUrl = match[1]
          .replace(/\\u0026/g, '&')
          .replace(/\\\//g, '/')
          .replace(/\\"/g, '"')
          .replace(/&amp;/g, '&');

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

// FALLBACK 2: Direct Instagram page scraping
async function downloadViaDirectScrape(reelId: string) {
  try {
    console.log('🔍 Method 3: Direct Page Scraping');
    
    const response = await fetch(`https://www.instagram.com/p/${reelId}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!response.ok) throw new Error('Page fetch failed');

    const html = await response.text();

    // Try to find video URL in page source
    const patterns = [
      /"video_url":"([^"]+)"/,
      /"src":"(https:\/\/[^"]+\.mp4[^"]*)"/,
      /og:video" content="([^"]+)"/,
    ];

    for (const pattern of patterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        let videoUrl = match[1]
          .replace(/\\u0026/g, '&')
          .replace(/\\\//g, '/')
          .replace(/\\"/g, '"')
          .replace(/&amp;/g, '&');

        const thumbMatch = html.match(/"og:image" content="([^"]+)"/);
        const thumbnail = thumbMatch?.[1] || '';

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
    console.log('========================================\n');

    // Try all methods in sequence
    const methods = [
      () => downloadViaRapidAPI(url),
      () => downloadViaOEmbed(reelId),
      () => downloadViaDirectScrape(reelId),
    ];

    let lastError: any = null;

    for (const method of methods) {
      try {
        const videoData = await method();
        
        console.log('\n✅ SUCCESS!\n');
        
        return NextResponse.json({
          success: true,
          data: videoData,
        });
      } catch (error: any) {
        lastError = error;
        console.log('⚠️  Method failed, trying next...\n');
        continue;
      }
    }

    // All methods failed
    console.log('\n❌ All methods failed\n');
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Could not fetch video. Please try again or check if the post is public.',
      },
      { status: 500 }
    );

  } catch (error: any) {
    console.error('\n💥 CRITICAL ERROR:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An error occurred. Please try again.',
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