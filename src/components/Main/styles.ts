import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 700;
  width: 68%;
  font-size: ${({ theme }) => theme.typography.lg};
  line-height: 4.95rem;
  color: ${({ theme }) => theme.palette.background.contrastText};
  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.typography.md};
    width: 100%;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CaptionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacers.md};
  width: 50%;
  margin-top: ${({ theme }) => theme.spacers.xl};
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: ${({ theme }) => theme.spacers.md};
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacers.lg};
  width: 30%;
  gap: ${({ theme }) => theme.spacers.lg};
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const PhotoCard = styled.div`
  width: 35.7rem;
  height: 37.4rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  filter: drop-shadow(18px 14px 4px rgba(0, 0, 0, 0.25));
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
