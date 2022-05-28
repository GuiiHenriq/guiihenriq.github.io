import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  a {
    position: relative;
    width: 100%;
    height: 10rem;
    background: url(${props => props.img}) no-repeat center;
    background-size: cover;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.primary};

      div {
        &.overlay {
          opacity: 0.5;
        }
      }
    }

    > section {
      z-index: 1;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 1.5rem;
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-weight: 300;
        font-size: 1rem;
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
  }
`;
