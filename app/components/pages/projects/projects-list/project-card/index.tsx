import { Project } from '@/app/types/projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.techs.map((tech) => tech.name).join(', ')

  return (
    <div className="group h-full p-6 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors">
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <Image
            width={400}
            height={225}
            className="w-full h-full object-cover rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors"
            src={project.thumbnail.url}
            alt={`Thumbnail of project ${project.title}`}
            unoptimized
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-medium text-zinc-100 group-hover:text-zinc-300 transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-zinc-400 mb-6">{project.shortDescription}</p>

          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech.name}
                className="text-zinc-300 bg-zinc-800/50 text-sm py-1 px-3 rounded-full border border-zinc-700"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
