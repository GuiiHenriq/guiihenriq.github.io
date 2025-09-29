import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group">
      <div className="h-[200px] sm:h-[300px] w-full mb-4">
        <Image
          width={800}
          height={400}
          className="w-full h-full object-cover rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors"
          src={project.thumbnail.url}
          alt={`Thumbnail of project ${project.title}`}
        />
      </div>

      <div>
        <h3 className="text-xl font-medium text-zinc-100 mb-2 group-hover:text-zinc-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-zinc-400 mb-4">{project.shortDescription}</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-4">
          {project.techs.map((tech) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          View project <HiArrowNarrowRight className="inline-block ml-1" />
        </Link>
      </div>
    </div>
  )
}
