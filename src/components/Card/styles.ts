import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.padding.xs};
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: ${({ theme }) => theme.palette.common.white} 0.2rem solid;
`;

export const CardCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;
