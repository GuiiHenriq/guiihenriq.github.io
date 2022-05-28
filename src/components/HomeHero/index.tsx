import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import Avatar from '../../assets/people.webp';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={Avatar} alt="Guilherme Henrique" />

      <div>
        <TextContainer>
          <h1>Hi</h1>
          <h2>I am Guilherme</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">
              {'\u003C'}-- Resume --{'\u003E'}
            </span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Guilherme,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Henrique,</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className="comment">
              {'\u003C'}-- Career --{'\u003E'}
            </span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Occupation: <span className="blue">Front-end Developer,</span>
            </div>
            <div>
              Experience: <span className="blue">4 years,</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
