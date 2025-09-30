import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <div className="container py-16">
      <SectionTitle subtitle="projects" title="highlighted projects" />
      <p className="text-zinc-400 mb-8">Some of my recent work</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects?.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        <p className="flex items-center gap-1.5 pt-4 md:col-span-2 md:justify-end">
          <span className="text-zinc-400">Want to see more?</span>
          <Link className="inline-flex" href="/projects">
            See all projects <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </div>
  )
}
