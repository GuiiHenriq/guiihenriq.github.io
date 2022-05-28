import Link from 'next/link';
import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  url: string;
  thumbnail: string;
}

interface ProjetcsProps {
  projects: IProject[];
}

function Projects({ projects }: ProjetcsProps) {
  return (
    <Container>
      <SectionTitle title="Latest projects" />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            img={project.thumbnail}
          />
        ))}
      </section>

      <button type="button">
        <Link href="/projects">
          <a>See All Projects</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
