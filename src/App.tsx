import React from 'react';
import styled from 'styled-components';
import BeanEater from './assets/beanEater.svg';
import GlobalStyle from './styles/global';
const FullContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  color: #f2f2f2;
  background-color: #434758;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23a3f7ff' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;
const Card = styled.div`
  background-color: #9cc4ff;
  padding: 1rem;
  border-radius: 1rem;
`;
const CustomLink = styled.a`
  color: #e1acff;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.7;
  text-decoration: none;
`;
const Title = styled.h1`
  font-size: min(2.4rem, 20vw);
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  text-shadow: 4px 3px 0 #7a7a7a;
`;
const App: React.FC = () => {
  return (
    <FullContainer>
      <GlobalStyle />
      <Card>
        <Title>
          REACTJS BOILERPLATE BY{' '}
          <CustomLink href="https://github.com/Jhonatanmizu">Mizugawa</CustomLink>
        </Title>
      </Card>
      <img src={BeanEater} alt="Bean eater" />
    </FullContainer>
  );
};
export default App;
