import { CMSIcon } from '@/app/components/cms-icon'
import { SkillTech as ISkillTech } from '@/app/types/projects'
import { getRelativeTimeString } from '@/app/utils/get-relative-time'

type SkillTechProps = {
  tech: ISkillTech
}

export const SkillTech = ({ tech }: SkillTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'en-US'
  ).replace('ago', '')
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.icon} />
      </div>

      <span>{relativeTime} of experience</span>
    </div>
  )
}
