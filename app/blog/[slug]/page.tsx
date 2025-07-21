import { fetchPostBySlug } from '@/app/utils/fetch-post-by-slug'
import { notFound } from 'next/navigation'
import { RichText } from '@/app/components/rich-text'
import Image from 'next/image'

interface PostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) return { title: 'Post não encontrado' }
  return { title: post.title }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <span className="text-gray-400 text-sm block mb-6">
        {new Date(post.createdAt).toLocaleDateString('pt-BR')}
      </span>
      {post.featuredImage?.url && (
        <div className="w-full h-72 mb-8 relative rounded overflow-hidden">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      {post.excerpt && (
        <p className="text-lg text-gray-300 mb-8">{post.excerpt}</p>
      )}
      <div className="prose prose-invert max-w-none">
        <RichText content={post.content.raw} />
      </div>
    </article>
  )
}
