import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import AssetWeb from '../../assets/asset-web.png';

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={AssetWeb} alt="Guilherme Henrique" />

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
              Name: <span className="blue">Guilherme Henrique,</span>
            </div>
            <div>
              Age: <span className="blue">23,</span>
            </div>
            <div>
              Hobbies: <span className="blue">Games and Motorcycle,</span>
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
              Studying: <span className="blue">Next/Nuxt and Web3,</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
