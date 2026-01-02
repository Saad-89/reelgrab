// app/api/proxy-download/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { success: false, error: 'URL is required' },
        { status: 400 }
      );
    }

    console.log('🔄 Proxying download for:', url);

    // Fetch the video through server (bypasses CORS)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'video/mp4,video/*,*/*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.instagram.com/',
      },
    });

    if (!response.ok) {
      console.error('❌ Failed to fetch video:', response.status);
      return NextResponse.json(
        { success: false, error: `Failed to fetch video: ${response.status}` },
        { status: response.status }
      );
    }

    // Get the video data as buffer
    const videoBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'video/mp4';

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
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error: any) {
    console.error('❌ Proxy download error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to download video' },
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