import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  gap: 5rem;
  display: flex;
  flex-direction: column;

  > h2 {
    font-size: 1.2rem;
    line-height: 2rem;
    font-weight: 300;
    color: ${({ theme }) => theme.secondary};
  }

  @media (min-width: ${({ theme }) => theme.lg}) {
    > h2 {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }
`;
