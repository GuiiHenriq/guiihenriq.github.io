import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  margin-top: 5rem;

  > svg {
    width: 20rem;
    flex: 1;
  }

  > div {
    width: 100%;
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    flex-direction: row;

    > svg {
      width: 22rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    > svg {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: ${({ theme }) => theme.xl}) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  width: 100%;
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  align-self: flex-start;
  transition: 1s !important;

  > div {
    margin: 0.2rem 0 0.2rem 1rem;
    white-space: normal;
  }

  &:first-child {
    div {
      margin: 0 0 0 1rem;
    }
  }

  &:last-child {
    align-self: flex-end;
  }

  &:hover {
    filter: brightness(1.5);
  }

  span {
    &.purple {
      color: #c38cdd;
    }

    &.blue {
      color: #7ac7e3;
    }

    &.comment {
      color: ${({ theme }) => theme.text};
      margin-bottom: 1rem;
      display: block;
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    width: 18rem;
    padding: 1rem;
    font-size: 0.8rem;
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    width: 24rem;
    font-size: 1rem;
  }
`;
