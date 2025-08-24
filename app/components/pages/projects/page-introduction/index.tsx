import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projects"
        title="My Projects"
        className="flex items-center [&>h3]:text-4xl"
      />

      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Here you can see some of the projects I&apos;ve developed. Feel free
          to browse and explore the projects to see how they were created, the
          technologies used, and the implemented features.
        </p>

        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Back to home
        </Link>
      </div>
    </section>
  )
}
