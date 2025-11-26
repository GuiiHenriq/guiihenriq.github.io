import Link from 'next/link'
import { ProjectCard } from './project-card'
import { Project } from '@/app/types/projects'

type ProjectsListProps = {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="block h-full"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </section>
  )
}
