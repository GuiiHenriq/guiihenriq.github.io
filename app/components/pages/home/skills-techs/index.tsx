import { SkillTech } from './skill-tech'
import { SkillTech as ISkillTech } from '@/app/types/projects'
import { SectionTitle } from '@/app/components/section-title'

type SkillsTechsProps = {
  skills: ISkillTech[]
}

export const SkillsTechs = ({ skills }: SkillsTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="knowledge" title="Skills" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {skills?.map((skill) => (
          <SkillTech key={skill.name} tech={skill} />
        ))}
      </div>
    </section>
  )
}
