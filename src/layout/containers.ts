import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.main};
  padding: ${({ theme }) => theme.padding.lg};
`;
