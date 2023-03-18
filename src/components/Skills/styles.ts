import styled from 'styled-components';

export const SkillsRow = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-top: ${({ theme }) => theme.spacers.md};
  margin-bottom: ${({ theme }) => theme.spacers.md};
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  gap: ${({ theme }) => theme.spacers.md};
  margin-bottom: ${({ theme }) => theme.spacers.md};

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const SkillTitle = styled.h3`
  font-family: 'Ubuntu', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.md};
  color: ${({ theme }) => theme.palette.background.contrastText};
  @media screen and (max-width: 800px) {
    font-size: ${({ theme }) => theme.typography.sm};
  }
`;
