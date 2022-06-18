// import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../../components/Header';
import ProjectBanner from '../../../components/ProjectBanner';
import { ProjectContainer } from '../../../styles/ProjectStyles';
// import LoadingScreen from '../../../components/LoadingScreen';
import { data } from '../../../services/content';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  url: string;
  thumbnail: string;
}

interface ProjetcProps {
  project: IProject;
}

export default function Project({ project }: ProjetcProps) {
  // const router = useRouter;

  // if (router.isFallback) return <LoadingScreen />;

  return (
    <ProjectContainer>
      <Head>
        <title>{project.title} | Guilherme Henrique</title>

        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta property="og:description" content={project.description} />
      </Head>

      <Header />
      <ProjectBanner
        title={project.title}
        img={project.thumbnail}
        type={project.type}
      />

      <main>
        <p>{project.description}</p>

        {project.url && (
          <button type="button">
            <a href={project.url}>View Project</a>
          </button>
        )}
      </main>
    </ProjectContainer>
  );
}

export const getStaticProps = async ({ params }) => {
  const content = data.filter(p => p.slug === params.slug);

  return {
    props: {
      project: content[0]
    }
  };
};

export const getStaticPaths = async () => {
  const paths = data.map(item => ({
    params: { slug: item.slug }
  }));

  return { paths, fallback: false };
};
