import styled from 'styled-components';
import { darken } from 'polished';

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  > main {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    button {
      background: ${({ theme }) => theme.primary};
      padding: 0.8rem 3rem;
      border-radius: 0.5rem;
      border: none;
      margin-top: 2rem;
      transition: 0.5s;

      &:hover {
        background: ${({ theme }) => darken(0.05, theme.primary)};
      }

      a {
        color: #fff;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 300;
      }
    }

    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
