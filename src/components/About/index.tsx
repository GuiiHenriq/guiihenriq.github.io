import { Container } from './styles';
import SectionTitle from '../SectionTitle';

function About() {
  return (
    <Container>
      <SectionTitle title="About" />

      <h2 data-aos="fade-up">
        My story with programming started around the year 2010. I had been
        exploring the world of programming for fun since I was 10 years old by
        creating a blog, websites in HTML and CSS, developing a form system in
        PHP and several other projects.
        <br />
        <br />
        Four years ago I had my first opportunity as a Front-end Developer and
        since then I ve been learning more and more about it. I had the
        opportunity to work with big clients, such as iFood Shop, Cacau Show,
        Banco Toyota, Vivo, and several others. These were remarkable learning
        experiences to me.
        <br />
        <br />
        Throughout these 4 years I had the opportunity to work with technologies
        ranging from HTML/CSS and Vanilla JS to frameworks such as ReactJS and
        VueJS.
        <br />
        <br />
        In the year 2021, I graduated in Systems Analysis and Development, and
        whenever I have time do spare, I spend some of it studying and learning
        new tools and technologies.
      </h2>
    </Container>
  );
}

export default About;
