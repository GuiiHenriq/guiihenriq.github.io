import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="04 years" description="of experience" />

      <section>
        <ExperienceItem
          year="Empiricus"
          title="Front end Developer Pleno"
          description="Working in the front-end development team, with focus on the projects related to the Logged User Area and website; all the projects are based developed in VueJS. On a daily basis, I work on the development of new components, big features and on the maintenance of existing features and components."
        />
        <ExperienceItem
          year="Keyrus"
          title="Front end Developer Pleno"
          description="Working on Hybris projects, using HTML, CSS, jQuery and Vanilla JS. Leading the front-end team and helping the squad with the development of their tasks."
        />
        <ExperienceItem
          year="Wunderman Thompson"
          title="Front end Developer Pleno"
          description="Working directly with the company Vivo, I was responsible for the development/maintenance of landing pages and Vivo's Portal, using VueJS and CMS AEM. We executed our tasks with the Kanban Agile Methodology and our Git Workflow."
        />
        <ExperienceItem
          year="Left Digital"
          title="Front end Developer Junior"
          description="Responsible for the projects of institutional websites, landing pages and e-mail marketing. Worked on projects for big clients, such as iFood Shop, Cacau Show and Banco Toyota. Participated in the project of restructuring  of the new agency's website, in which I had the opportunity to use ReactJS. "
        />
      </section>
    </Container>
  );
}

export default Experiences;
