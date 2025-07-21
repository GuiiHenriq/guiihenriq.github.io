import { fetchHygraphQuery } from './fetch-hygraph-query'
import type { Post } from '../types/posts'

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const query = `{
    post(where: { slug: \"${slug}\" }) {
      title
      slug
      excerpt
      content { raw html }
      featuredImage { url }
      createdAt
    }
  }`
  const data = await fetchHygraphQuery<{ post: Post | null }>(query)
  return data.post
} 