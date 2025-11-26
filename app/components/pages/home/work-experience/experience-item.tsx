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
    <div className="group relative">
      {/* Timeline marker and hover effect for desktop */}
      <div className="hidden md:block">
        <span className="absolute left-[-16px] top-0 bottom-0 w-px bg-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute left-[-22px] top-6 flex items-center justify-center">
          {isCurrent && (
            <span className="absolute w-5 h-5 rounded-full bg-zinc-400/20 animate-ping" />
          )}
          <span className="relative w-3 h-3 bg-zinc-400 rounded-full ring-4 ring-zinc-800" />
        </span>
      </div>

      <div className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
        <div className="flex items-start gap-4 mb-4">
          <div className="rounded-full border border-zinc-700 p-1">
            <Image
              width={40}
              height={40}
              className="rounded-full"
              src={companyLogo.url}
              alt={`${companyName} Company Logo`}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-zinc-100 group-hover:text-zinc-300 transition-colors">
              {role}
            </h3>
            <a
              href={companyUrl}
              target="_blank"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              {companyName}
            </a>
            <p className="text-zinc-500 text-sm mt-1">
              {formattedStartDate} - {formattedEndDate} • {formattedDuration}
            </p>
          </div>
        </div>

        <div className="text-zinc-400 mb-4 text-sm">
          <RichText content={description.raw} />
        </div>

        <div className="flex flex-wrap gap-2">
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
