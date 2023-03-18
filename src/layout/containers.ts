import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: 100%;
  padding: ${({ theme }) => theme.padding.lg};
`;
export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spacers.xl};
  padding: ${({ theme }) => theme.padding.lg};
`;
