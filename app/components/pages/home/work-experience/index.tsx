import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience as IWorkExperience } from '@/app/types/work-experiences'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <div className="container py-16">
      <SectionTitle subtitle="experience" title="work experience" />
      <p className="text-zinc-400 mb-10">
        I&apos;m always open to new challenges and exciting projects. Let&apos;s
        work together to create amazing solutions for your company!
      </p>

      <div className="relative pl-8 md:pl-8 pl-0 flex flex-col gap-6 before:content-[''] before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-zinc-800 md:before:block before:hidden">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </div>
  )
}
