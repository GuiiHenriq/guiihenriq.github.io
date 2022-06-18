import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media (min-width: ${({ theme }) => theme.md}) {
      gap: 5rem;
    }

    @media (min-width: ${({ theme }) => theme.lg}) {
      gap: 8rem;
      margin-top: 8rem;
      flex-wrap: nowrap;
    }
  }
`;

export const KnowledgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  p {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 1rem;
    text-transform: uppercase;
  }

  svg {
    width: 5rem;
    height: 5rem;
    color: ${({ theme }) => theme.secondary};
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.95);
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    p {
      font-size: 1.3rem;
    }

    svg {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;
