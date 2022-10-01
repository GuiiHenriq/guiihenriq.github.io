import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import AssetWeb from '../../assets/code.svg';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <AssetWeb />

      <div>
        <TextContainer>
          <h1>Hi</h1>
          <h2>I am Guilherme Henrique 👋</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos="zoom-in">
            <span className="comment">
              {'\u003C'}-- Resume --{'\u003E'}
            </span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">Guilherme Henrique 🧑‍💻,</span>
            </div>
            <div>
              Age: <span className="blue">23 🙍‍♂️,</span>
            </div>
            <div>
              Country: <span className="blue">Brazil 🇧🇷,</span>
            </div>
            <div>
              Hobbies: <span className="blue">Motorcycle 🏍️</span>
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
            <div>
              Working with: <span className="blue">Vue,</span>
            </div>
            <div>
              Studying: <span className="blue">Next/Nuxt and Web3</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
