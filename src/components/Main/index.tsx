import React from 'react';
import { MainContainer } from '../../layout/containers';
import { Caption, Heading, Paragraph } from '../../layout/typography';
import * as S from './styles';
const Main: React.FC = () => {
  return (
    <MainContainer>
      <Heading>Jhonatan Jesus</Heading>
      <S.RowWrapper>
        <S.ContentWrapper>
          <S.Title>A Software Developer & UX/UI Designer.</S.Title>
          <Paragraph>
            Passionate about technology, I'm currently a front-end developer, I like to craft
            quality software with focus on user experience and user interface.
          </Paragraph>
        </S.ContentWrapper>
        <S.PhotoCard />
      </S.RowWrapper>
      <S.CaptionRow>
        <Caption>
          With two years of experience I contribuited to many differents applications , at small
          projects and large scale projects.
        </Caption>
        <Caption>
          With two years of experience I contribuited to many differents applications , at small
          projects and large scale projects.
        </Caption>
      </S.CaptionRow>
    </MainContainer>
  );
};

export default Main;
