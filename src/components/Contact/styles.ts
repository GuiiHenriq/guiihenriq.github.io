import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  > p {
    margin-top: 2rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.textHighlight};
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 5rem;

  > button {
    border: none;
    color: #fff;
    font-weight: 300;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: 0.5s;
    width: fit-content;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    > button {
      padding: 1rem 2.5rem;
      font-size: 1.2rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    margin-top: 8rem;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  outline: none;
  transition: 0.5s;
  padding: 1.4rem;
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    padding: 1.7rem 1.5rem;
    font-size: 1.2rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1;
  padding: 1.4rem;
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (min-width: ${({ theme }) => theme.md}) {
    padding: 1.7rem 1.5rem;
    font-size: 1.2rem;
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    grid-column: 1 / 3;
  }
`;
