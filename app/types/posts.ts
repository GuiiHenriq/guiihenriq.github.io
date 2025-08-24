import type { RichTextContent } from '@graphcms/rich-text-types'

export type Post = {
  title: string
  slug: string
  excerpt?: string
  content: {
    raw: RichTextContent
    html?: string
  }
  featuredImage?: {
    url: string
  }
  createdAt: string // Campo padrão do Hygraph para data de criação
}
