import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 1.8rem;
  }

  h2 {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.8rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    h1 {
      font-size: 4.5rem;
    }

    h2 {
      font-size: 3.5rem;
    }
  }
`;
