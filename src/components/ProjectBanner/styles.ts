import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 20rem;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;
  position: relative;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cta-back {
    z-index: 2;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};
    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }

    svg {
      width: 34px;
      height: 34px;
    }
  }

  section {
    z-index: 1;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.8rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  > div {
    &.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.7;
      transition: 0.5s;
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    height: 26rem;
    padding: 3rem 5rem;

    section {
      h1 {
        font-size: 3rem;
      }

      h2 {
        font-size: 2rem;
      }
    }
  }
`;
