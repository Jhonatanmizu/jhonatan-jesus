import React from 'react';
// Styles
import * as S from './styles';
// Props
interface Props {
  title: string;
  cover: string;
  link: string;
  text: string;
}

const Card: React.FC<Props> = ({ title, cover, link, text }: Props) => {
  return (
    <S.CardWrapper>
      <S.CardCover src={cover} alt={title} />
      {text}
    </S.CardWrapper>
  );
};

export default Card;
