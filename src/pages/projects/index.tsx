import Head from 'next/head';
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { data } from '../../services/content';
import SectionTitle from '../../components/SectionTitle';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  url: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: IProject[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projects | Guilherme Henrique</title>

        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:description" content="Description - Resume NextJS" />
      </Head>

      <Header />
      <main className="container">
        <SectionTitle title="Projects" />

        <section>
          {projects.map(project => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              type={project.type}
              img={project.thumbnail}
              slug={project.slug}
            />
          ))}
        </section>
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps = async () => ({
  props: {
    projects: data
  }
});
