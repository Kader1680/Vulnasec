import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { repoUrl } = await request.json();

    
    if (!repoUrl || !repoUrl.includes('github.com')) {
      return NextResponse.json(
        { error: 'رابط GitHub غير صحيح' },
        { status: 400 }
      );
    }

    const urlParts = repoUrl.replace('https://github.com/', '').split('/');
    const owner = urlParts[0];
    const repo = urlParts[1];

    if (!owner || !repo) {
      return NextResponse.json(
        { error: 'رابط غير مكتمل' },
        { status: 400 }
      );
    }

   
    return NextResponse.json({
      success: true,
      scanId: `scan_${Date.now()}`,
      message: 'تم بدء الفحص بنجاح',
      repository: {
        owner,
        repo,
        url: repoUrl
      }
    });

  } catch (error) {
    console.error('خطأ في API:', error);
    return NextResponse.json(
      { error: 'حدث خطأ في الخادم' },
      { status: 500 }
    );
  }
}