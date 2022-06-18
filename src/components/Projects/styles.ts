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
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.lg}) {
      gap: 4rem;
    }
  }

  > button {
    background: ${({ theme }) => theme.primary};
    padding: 1rem;

    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1rem;

      font-weight: 300;
    }

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    @media (min-width: ${({ theme }) => theme.md}) {
      padding: 0.8rem 3rem;

      a {
        font-size: 1.5rem;
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
    height: auto;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;

    a {
      font-weight: 300;
      font-size: 1.5rem;
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
          font-size: 1.5rem;
          color: ${({ theme }) => theme.primary};
          text-shadow: -4px 5px 22px #11172b;
        }

        h2 {
          font-size: 1rem;
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

  @media (min-width: ${({ theme }) => theme.md}) {
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    > button {
      height: 4rem;

      a {
        font-size: 2rem;
      }
    }

    > section {
      > div {
        &.text {
          h1 {
            font-size: 2.5rem;
          }

          h2 {
            font-size: 2rem;
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
`;
