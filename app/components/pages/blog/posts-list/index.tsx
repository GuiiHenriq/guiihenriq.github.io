import Link from 'next/link'
import { BlogPostCard } from './post-card'
import { Post } from '@/app/types/posts'

type BlogPostsListProps = {
  posts: Post[]
}

export const BlogPostsList = ({ posts }: BlogPostsListProps) => {
  return (
    <section className="container py-16 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <BlogPostCard post={post} />
        </Link>
      ))}
    </section>
  )
} 