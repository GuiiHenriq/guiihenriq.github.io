import { Post } from '@/app/types/posts'
import Image from 'next/image'

type BlogPostCardProps = {
  post: Post
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border border-gray-700 hover:border-cyan-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden ">
        {post.featuredImage?.url && (
          <Image
            width={380}
            height={200}
            className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
            src={post.featuredImage.url}
            alt={`Imagem de destaque do post ${post.title}`}
            unoptimized
          />
        )}
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-cyan-500 transition-all">
          {post.title}
        </strong>
        <p className="mt-2 text-gray-400 text-sm line-clamp-4">
          {post.excerpt}
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {new Date(post.createdAt).toLocaleDateString('pt-BR')}
        </span>
      </div>
    </div>
  )
}
