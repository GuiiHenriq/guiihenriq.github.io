import { SectionTitle } from '@/app/components/section-title'
import { ExperienceItem } from './experience-item'
import { WorkExperience as IWorkExperience } from '@/app/types/work-experiences'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <div className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experience" title="Work Experience" />
        <p className="text-gray-400 mt-6">
          I&apos;m always open to new challenges and exciting projects.
          Let&apos;s work together to create amazing solutions for your company!
        </p>
      </div>

      <div className="flex flex-col gap-4">
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
