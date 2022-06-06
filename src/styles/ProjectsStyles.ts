import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    > section {
      margin: 5rem auto;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 1000px) {
      > section {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 500px) {
      > section {
        grid-template-columns: 1fr;
      }
    }
  }
`;
