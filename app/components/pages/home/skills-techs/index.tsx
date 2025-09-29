import { SkillTech } from './skill-tech'
import { SkillTech as ISkillTech } from '@/app/types/projects'
import { SectionTitle } from '@/app/components/section-title'

type SkillsTechsProps = {
	skills: ISkillTech[]
}

export const SkillsTechs = ({ skills }: SkillsTechsProps) => {
	return (
		<section className="container py-16">
			<SectionTitle subtitle="knowledge" title="skills & expertise" />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
				{skills?.map((skill) => (
					<SkillTech key={skill.name} tech={skill} />
				))}
			</div>
		</section>
	)
}
