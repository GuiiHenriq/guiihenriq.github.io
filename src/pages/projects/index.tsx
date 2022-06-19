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
        {/* Primary Meta Tags */}
        <title>Projects | Guilherme Henrique</title>
        <meta name="title" content="Guilherme Henrique | Front-end Developer" />
        <meta
          name="description"
          content="I'm Guilherme Henrique, a Front-end developer with a passion for creating things, and in his spare time he enjoys playing games and riding motorcycles."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guihenrique.vercel.app/" />
        <meta
          property="og:title"
          content="Guilherme Henrique | Front-end Developer"
        />
        <meta
          property="og:description"
          content="I'm Guilherme Henrique, a Front-end developer with a passion for creating things, and in his spare time he enjoys playing games and riding motorcycles."
        />
        <meta property="og:image" content="/ogimage.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://guihenrique.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Guilherme Henrique | Front-end Developer"
        />
        <meta
          property="twitter:description"
          content="I'm Guilherme Henrique, a Front-end developer with a passion for creating things, and in his spare time he enjoys playing games and riding motorcycles."
        />
        <meta property="twitter:image" content="/ogimage.png" />
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
