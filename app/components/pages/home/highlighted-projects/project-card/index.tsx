import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HorizontalDividerProps = {
  className?: string
}

export const ProjectCard = ({ className }: HorizontalDividerProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
          src="https://media.graphassets.com/vyKTccMSONtRMaGtPF3w"
          alt="Thumbnail of project"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            src="/images/icons/project-title-icon.svg"
            alt="Icon of project"
          />
          Book Wise
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
          hic totam saepe ab natus, possimus, officiis ipsa minima quisquam
          accusamus modi nihil sint laborum est repellendus eligendi. Quos odio
          ipsa nostrum ad, maxime quas corporis eos ipsum quibusdam quam animi,
          aut nam nobis cum?
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="NextJS" />
          <TechBadge name="NextJS" />
          <TechBadge name="NextJS" />
          <TechBadge name="NextJS" />
        </div>

        <Link href="/projects/book-wise">
          View more <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
