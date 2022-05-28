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
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}

export default ProjectBanner;
