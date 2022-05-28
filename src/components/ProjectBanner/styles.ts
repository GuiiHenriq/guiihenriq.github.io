import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 26rem;
  background: url(${props => props.img}) no-repeat center;
  background-size: cover;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  section {
    z-index: 1;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 2rem;
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

  @media (max-width: 700px) {
    height: 2rem 2.5rem;
    padding: 20rem;

    section {
      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
