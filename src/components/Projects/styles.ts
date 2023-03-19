import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.lg};
  line-height: 4.95rem;
  color: ${({ theme }) => theme.palette.background.contrastText};
  margin-bottom: ${({ theme }) => theme.spacers.lg};
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.typography.md};
  }
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: ${({ theme }) => theme.spacers.lg};
  margin-top: ${({ theme }) => theme.spacers.lg};
  margin-bottom: ${({ theme }) => theme.spacers.lg};
`;
