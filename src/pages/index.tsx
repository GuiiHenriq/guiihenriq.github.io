import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';
import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';
import { data } from '../services/content';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  url: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProject[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        {/* Primary Meta Tags */}
        <title>Home | Guilherme Henrique</title>
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
        <HomeHero />
        <About />
        <Experiences />
        <Projects projects={projects} />
        <Knowledge />
        <Contact />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps = async () => ({
  props: {
    projects: data
  }
});
