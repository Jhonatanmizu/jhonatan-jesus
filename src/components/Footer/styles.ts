import styled, { keyframes } from 'styled-components';

export const floatingAnimation = keyframes`
   0% { transform:translateY(0px);}
 50% { transform:translateY(-15px);}
 100% { transform:translateY(0px); }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 6.4rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.palette.background.main};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  :hover {
    opacity: 0.6;
  }
  font-weight: 700;
`;

export const HeartWrapper = styled.div`
  transform: translateY(0px);
  animation-name: ${floatingAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
