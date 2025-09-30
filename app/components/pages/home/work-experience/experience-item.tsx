import { RichText } from '@/app/components/rich-text'
import { TechBadge } from '@/app/components/tech-badge'
import { WorkExperience } from '@/app/types/work-experiences'
import { enUS } from 'date-fns/locale'
import Image from 'next/image'
import { differenceInMonths, differenceInYears, format } from 'date-fns'

type ExperienceItemProps = {
  experience: WorkExperience
}

export const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    companyName,
    companyLogo,
    companyUrl,
    description,
    role,
    techs,
  } = experience

  const startDate = new Date(experience.startDate)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: enUS })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: enUS })
    : 'Present'

  const end = endDate ? new Date(endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} year${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` and ${monthsRemaining} month${monthsRemaining > 1 ? 's' : ''}`
            : ''
        }`
      : `${months} month${months > 1 ? 's' : ''}`

  const isCurrent = !endDate

  return (
    <div className="relative pl-6 md:pl-6 pl-0 group">
      {/* Colored segment on hover to highlight the item on the timeline */}
      <span className="pointer-events-none absolute left-[-16px] top-0 bottom-0 w-px bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity md:block hidden"></span>

      {/* Marker aligned exactly on the container timeline (container line at left-4 => 16px) */}
      <span className="absolute -left-[22px] top-2 inline-flex items-center justify-center md:block hidden">
        {isCurrent && (
          <span className="absolute w-5 h-5 rounded-full bg-cyan-500/20 animate-ping"></span>
        )}
        <span className="relative w-3 h-3 bg-cyan-500 rounded-full ring-4 ring-cyan-500/10"></span>
      </span>

      <div className="p-4 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
        <div className="flex items-start gap-3 mb-3">
          <div className="rounded-full border border-zinc-700 p-0.5">
            <Image
              width={36}
              height={36}
              className="rounded-full"
              src={companyLogo.url}
              alt={`${companyName} Company Logo`}
            />
          </div>

          <div>
            <h3 className="text-base font-medium text-zinc-100 group-hover:text-zinc-300 transition-colors">
              {role}
            </h3>
            <a
              href={companyUrl}
              target="_blank"
              className="text-zinc-400 hover:text-zinc-300 transition-colors text-sm"
            >
              {companyName}
            </a>
            <p className="text-zinc-500 text-xs mt-1">
              {formattedStartDate} - {formattedEndDate} • {formattedDuration}
            </p>
          </div>
        </div>

        <div className="text-zinc-400 mb-3 text-sm">
          <RichText content={description.raw} />
        </div>

        <div className="flex flex-wrap gap-1">
          {techs.map((tech) => (
            <TechBadge
              key={`experience-${companyName}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
