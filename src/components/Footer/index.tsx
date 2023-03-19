import React from 'react';
import * as S from './styles';
import { MdFavorite } from 'react-icons/md';
const Footer: React.FC = () => {
  return (
    <S.FooterWrapper>
      Made With{' '}
      <S.HeartWrapper>
        <MdFavorite size={30} />
      </S.HeartWrapper>
      By <S.FooterLink>Jhonatan Jesus</S.FooterLink>
    </S.FooterWrapper>
  );
};

export default Footer;
