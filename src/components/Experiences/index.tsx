import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="04 years" description="of experience" />

      <section>
        <ExperienceItem
          year="2021"
          title="Front-end Developer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ExperienceItem
          year="2020"
          title="Front-end Developer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ExperienceItem
          year="2019"
          title="Front-end Developer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </section>
    </Container>
  );
}

export default Experiences;
