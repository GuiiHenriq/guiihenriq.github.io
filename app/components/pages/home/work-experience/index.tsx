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

      <div className="relative flex flex-col gap-6 md:pl-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />
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
