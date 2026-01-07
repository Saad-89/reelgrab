// app/api/proxy-download/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Route segment config for video downloads (longer timeout)
export const runtime = 'nodejs';
export const maxDuration = 60; // 60 seconds for video downloads

// Helper function to create fetch with timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 60000): Promise<Response> {
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
      throw new Error('Request timeout - Video download took too long');
    }
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'URL is required' },
        { status: 400 }
      );
    }

    if (!url.startsWith('http')) {
      return NextResponse.json(
        { success: false, error: 'Invalid URL' },
        { status: 400 }
      );
    }

    console.log('🔄 Proxying download for:', url);

    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    ];

    const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

    // Fetch the video through server (bypasses CORS) with timeout
    const response = await fetchWithTimeout(url, {
      method: 'GET',
      headers: {
        'User-Agent': randomUserAgent,
        'Accept': 'video/mp4,video/*,*/*;q=0.9',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.instagram.com/',
        'Accept-Encoding': 'identity', // Don't compress video
        'Range': 'bytes=0-', // Support range requests
        'Cache-Control': 'no-cache',
      },
    }, 60000); // 60 second timeout for video downloads

    if (!response.ok) {
      console.error('❌ Failed to fetch video:', response.status, response.statusText);
      return NextResponse.json(
        { success: false, error: `Failed to fetch video: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    // Get the video data as buffer with streaming for large files
    const videoBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'video/mp4';

    if (videoBuffer.byteLength === 0) {
      console.error('❌ Empty video buffer');
      return NextResponse.json(
        { success: false, error: 'Video file is empty' },
        { status: 500 }
      );
    }

    console.log('✅ Video fetched successfully');
    console.log('📊 Size:', videoBuffer.byteLength, 'bytes');
    console.log('📝 Content-Type:', contentType);

    // Return the video with proper headers
    return new NextResponse(videoBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Length': videoBuffer.byteLength.toString(),
        'Content-Disposition': `attachment; filename="reelgrab_${Date.now()}.mp4"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });

  } catch (error: any) {
    console.error('❌ Proxy download error:', error);
    
    const errorMessage = error.message?.includes('timeout') 
      ? 'Download timeout - Video is too large or connection is slow'
      : error.message?.includes('fetch')
      ? 'Network error - Could not connect to video server'
      : 'Failed to download video';
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}


// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const { url } = await request.json();

//     if (!url) {
//       return NextResponse.json(
//         { success: false, error: 'URL is required' },
//         { status: 400 }
//       );
//     }

//     console.log('🔄 Proxying download for:', url);

//     // Fetch the video through server (bypasses CORS)
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
//         'Accept': 'video/mp4,video/*,*/*',
//         'Accept-Encoding': 'identity',
//         'Range': 'bytes=0-',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch video: ${response.status}`);
//     }

//     // Get the video data
//     const videoBuffer = await response.arrayBuffer();

//     console.log('✅ Video fetched successfully, size:', videoBuffer.byteLength);

//     // Return the video with proper headers
//     return new NextResponse(videoBuffer, {
//       status: 200,
//       headers: {
//         'Content-Type': 'video/mp4',
//         'Content-Length': videoBuffer.byteLength.toString(),
//         'Content-Disposition': `attachment; filename="reelgrab_${Date.now()}.mp4"`,
//         'Cache-Control': 'no-cache',
//       },
//     });

//   } catch (error: any) {
//     console.error('❌ Proxy download error:', error);
//     return NextResponse.json(
//       { success: false, error: 'Failed to download video' },
//       { status: 500 }
//     );
//   }
// }