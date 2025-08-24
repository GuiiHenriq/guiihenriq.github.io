import { fetchHygraphQuery } from './fetch-hygraph-query'
import type { Post } from '../types/posts'

export type FetchPostsOptions = {
  orderBy?: 'createdAt_ASC' | 'createdAt_DESC'
  search?: string
}

export async function fetchPosts({
  orderBy = 'createdAt_DESC',
  search,
}: FetchPostsOptions = {}): Promise<Post[]> {
  let filter = ''
  if (search) {
    filter = `where: { OR: [ { title_contains: "${search}" }, { excerpt_contains: "${search}" } ] }`
  }
  const query = `{
    posts(orderBy: ${orderBy}${filter ? `, ${filter}` : ''}) {
      title
      slug
      excerpt
      content { raw html }
      featuredImage { url }
      createdAt
    }
  }`
  const data = await fetchHygraphQuery<{ posts: Post[] }>(query)
  return data.posts
}
