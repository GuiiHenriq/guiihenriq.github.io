import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const BlogPageIntroduction = () => {
  return (
    <section className="w-full h-[300px] lg:h-[400px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="blog"
        title="Blog"
        className="flex items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Here you will find articles, news and content about technology,
          programming and my learnings.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Back to home
        </Link>
      </div>
    </section>
  )
}
