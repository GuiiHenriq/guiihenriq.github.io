import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    margin-top: 5rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.md}) {
      flex-direction: row;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media (min-width: ${({ theme }) => theme.lg}) {
      grid-column-gap: 1.5rem;
      grid-row-gap: 1.5rem;
      margin-top: 7rem;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    transition: 0.5s;
    width: 100%;
    height: 100%;
    padding: 2rem;
    max-width: 100%;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
      margin-top: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-top: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
    }
  }

  &:hover > div {
    transform: translateY(0);
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    > div {
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    > div {
      padding: 1rem;
      max-width: none;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }

    &:hover > div {
      filter: brightness(1.5);
      transform: translateY(-20px);
    }
  }
`;
