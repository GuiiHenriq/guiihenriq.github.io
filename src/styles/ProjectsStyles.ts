import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 5rem;

    > section {
      margin: 5rem auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    @media (min-width: ${({ theme }) => theme.md}) {
      > section {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: ${({ theme }) => theme.lg}) {
      > section {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;
