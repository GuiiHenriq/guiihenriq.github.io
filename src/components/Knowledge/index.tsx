import { AiFillHtml5 } from 'react-icons/ai';
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import KnowledgeItem from './KnowledgeItem';

function Knowledge() {
  return (
    <Container>
      <SectionTitle title="Knowledge" />

      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
      </section>
    </Container>
  );
}

export default Knowledge;
