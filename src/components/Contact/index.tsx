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

      <p className="disclaimer">
        or send me a message to the e-mail
        <br />
        erba.guilherme@gmail.com
      </p>

      <Form />
    </Container>
  );
}

export default Contact;
