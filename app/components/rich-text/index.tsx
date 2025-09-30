import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-gray-50 font-medium">{children}</b>
        ),
        p: ({ children }) => (
          <p className="text-zinc-300 leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc marker:text-cyan-500 ml-5 space-y-2 leading-relaxed">
            {children}
          </ul>
        ),
        li: ({ children }) => <li className="text-zinc-300">{children}</li>,
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="hover:text-cyan-500 transition-colors underline"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}
