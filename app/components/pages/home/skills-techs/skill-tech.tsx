import { CMSIcon } from '@/app/components/cms-icon'
import { SkillTech as ISkillTech } from '@/app/types/projects'
import { getRelativeTimeString } from '@/app/utils/get-relative-time'

type SkillTechProps = {
	tech: ISkillTech
}

export const SkillTech = ({ tech }: SkillTechProps) => {
	const relativeTime = getRelativeTimeString(new Date(tech.startDate), 'en-US').replace('ago', '')
	return (
		<div className="py-3 border-b border-gray-800">
			<div className="flex items-start justify-between">
				<div>
					<p className="text-gray-100 font-medium leading-none">{tech.name}</p>
					<span className="text-gray-400 text-sm mt-1 block">{relativeTime} of experience</span>
				</div>
				<CMSIcon icon={tech.icon} />
			</div>
		</div>
	)
}
