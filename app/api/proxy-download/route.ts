import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

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

    // Multiple user agents to try
    const userAgents = [
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
      'Instagram 219.0.0.12.117 Android',
    ];

    let lastError: Error | null = null;

    // Try each user agent
    for (const userAgent of userAgents) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'User-Agent': userAgent,
            'Accept': 'video/mp4,video/*,*/*',
            'Accept-Encoding': 'identity',
            'Accept-Language': 'en-US,en;q=0.9',
            'Referer': 'https://www.instagram.com/',
            'Origin': 'https://www.instagram.com',
            'Sec-Fetch-Dest': 'video',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
          },
          redirect: 'follow',
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        // Stream the video
        const contentType = response.headers.get('content-type') || 'video/mp4';
        const contentLength = response.headers.get('content-length');

        console.log('✅ Video fetched successfully');
        console.log('📦 Content-Type:', contentType);
        console.log('📏 Content-Length:', contentLength);

        // Return the video stream with proper headers
        return new NextResponse(response.body, {
          status: 200,
          headers: {
            'Content-Type': contentType,
            'Content-Length': contentLength || '',
            'Content-Disposition': `attachment; filename="reelgrab_${Date.now()}.mp4"`,
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          },
        });

      } catch (error: any) {
        console.log(`❌ Failed with user agent: ${userAgent.substring(0, 50)}...`);
        lastError = error;
        continue;
      }
    }

    // If all user agents failed
    throw lastError || new Error('All download attempts failed');

  } catch (error: any) {
    console.error('❌ Proxy download error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to download video',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
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

