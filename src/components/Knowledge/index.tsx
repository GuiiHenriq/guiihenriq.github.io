import { FaVuejs, FaReact } from 'react-icons/fa';
import { SiNuxtdotjs, SiNextdotjs } from 'react-icons/si';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import KnowledgeItem from './KnowledgeItem';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Knowledge" />

      <section>
        <KnowledgeItem title="VUE" icon={<FaVuejs />} />
        <KnowledgeItem title="NUXT" icon={<SiNuxtdotjs />} />
        <KnowledgeItem title="REACT" icon={<FaReact />} />
        <KnowledgeItem title="NEXT" icon={<SiNextdotjs />} />
      </section>
    </Container>
  );
}

export default Knowledge;
