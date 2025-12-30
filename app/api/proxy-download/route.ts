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
        'Accept-Encoding': 'identity',
        'Range': 'bytes=0-',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch video: ${response.status}`);
    }

    // Get the video data
    const videoBuffer = await response.arrayBuffer();

    console.log('✅ Video fetched successfully, size:', videoBuffer.byteLength);

    // Return the video with proper headers
    return new NextResponse(videoBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': videoBuffer.byteLength.toString(),
        'Content-Disposition': `attachment; filename="reelgrab_${Date.now()}.mp4"`,
        'Cache-Control': 'no-cache',
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