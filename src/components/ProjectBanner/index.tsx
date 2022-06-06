import Link from 'next/link';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { Container } from './styles';

interface ProjectBannerProps {
  title: string;
  type: string;
  img: string;
}

function ProjectBanner({ title, type, img }: ProjectBannerProps) {
  return (
    <Container img={img}>
      <div className="overlay" />

      <div className="cta-back">
        <Link href="/projects">
          <IoChevronBackCircleOutline />
        </Link>
      </div>

      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default ProjectBanner;
