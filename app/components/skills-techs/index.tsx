import { TbBrandNextjs } from 'react-icons/tb'
import { SectionTitle } from '../section-title'
import { SkillTech } from './skill-tech'

export const SkillsTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="knowledge" title="Skills" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkillTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'NextJS',
              startDate: '2023-01-01',
            }}
          />
        ))}
      </div>
    </section>
  )
}
