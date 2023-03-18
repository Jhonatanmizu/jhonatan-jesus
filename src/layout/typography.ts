import styled from 'styled-components';

export const Heading = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.xl};
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: ${({ theme }) => theme.spacers.md};

  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.typography.lg};
  }
`;

export const Paragraph = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-size: ${({ theme }) => theme.typography.sm};
  line-height: 3.3rem;
  text-align: justify;
  color: ${({ theme }) => theme.palette.background.contrastText};
`;

export const Caption = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-size: ${({ theme }) => theme.typography.xs};
  font-weight: 700;
  width: 40%;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.palette.background.contrastText};
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
