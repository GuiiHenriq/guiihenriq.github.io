import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScroll() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScroll}>
          Back
        </button>

        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/GuiiHenriq/')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/guilhermeerba/')
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
