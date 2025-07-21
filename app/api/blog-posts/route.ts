import { NextResponse } from 'next/server'
import { fetchPosts } from '@/app/utils/fetch-posts'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const orderBy = (searchParams.get('orderBy') as 'createdAt_DESC' | 'createdAt_ASC') || 'createdAt_DESC'
  const search = searchParams.get('search') || ''
  const posts = await fetchPosts({ orderBy, search })
  return NextResponse.json({ posts })
} 