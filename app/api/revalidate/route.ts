import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const secret = request.nextUrl.searchParams.get('secret')
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    revalidateTag('hygraph')

    console.log('✅ Revalidation triggered by Hygraph webhook')

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      data: body,
    })
  } catch (err) {
    console.error('❌ Error revalidating:', err)
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
