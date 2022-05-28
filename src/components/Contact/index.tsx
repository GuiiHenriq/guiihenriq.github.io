import { Container } from './styles';
import SectionTitle from '../SectionTitle';
import Form from './Form';

function Contact() {
  return (
    <Container>
      <SectionTitle
        title="Talk to me"
        description="Send me a message in the form"
      />

      <Form />
    </Container>
  );
}

export default Contact;
