import { darken } from 'polished';
import styled from 'styled-components';

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }

  > button {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    @media (max-width: 500px) {
      padding: 1rem;

      a {
        font-size: 1rem;
      }
    }
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div {
        &.text {
          right: -12rem;
        }

        &.overlay {
          opacity: 0.4;
        }
      }
    }

    > button {
      a {
        color: ${({ theme }) => theme.primary};
      }
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;

    a {
      font-weight: 300;
      font-size: 2rem;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    background-position: top;
    position: relative;

    > div {
      &.overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.gradient};
        opacity: 0.75;
        transition: 0.5s;
      }

      &.text {
        position: absolute;
        width: fit-content;
        top: 3rem;
        right: -10rem;
        transition: 0.5s;

        h1 {
          font-size: 2.5rem;
          color: ${({ theme }) => theme.primary};
          text-shadow: -4px 5px 22px #11172b;
        }

        h2 {
          font-size: 2rem;
          font-weight: 300;
          color: ${({ theme }) => theme.secondary};
          text-shadow: -4px 5px 22px #11172b;
        }
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 3rem 5rem 0 0;
    }

    > section {
      > div {
        &.text {
          text-align: right;
          right: 0;
          left: -10rem;
        }
      }
    }

    &:hover {
      > section {
        > div {
          &.text {
            left: -12rem;
          }
        }
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div {
        &.text {
          left: 1rem;
          top: 1rem;
        }
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div {
          &.text {
            left: 1rem;
            top: 1rem;
            text-align: left;
          }
        }
      }

      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section {
          > div {
            &.text {
              left: 1rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 450px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    > section {
      > div {
        &.text {
          h1 {
            font-size: 1.5rem;
          }

          h2 {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
