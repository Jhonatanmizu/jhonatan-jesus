import React from 'react';
import { Section } from '../../layout/containers';
import { Paragraph } from '../../layout/typography';
import * as S from './styles';
const Skills: React.FC = () => {
  return (
    <Section>
      <S.SkillsRow>
        <S.SkillWrapper>
          <S.SkillTitle>Development</S.SkillTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Curabitur fringilla sed ullamcorper mi turpis
            imperdiet lectus. Nulla risus enim bibendum lectus mauris. Nibh scelerisque pharetra
            urna suspendisse. Fusce donec nibh velit in gravida odio ante fringilla ridiculus.
            Ullamcorper at egestas tempor mi arcu arcu mattis.
          </Paragraph>
        </S.SkillWrapper>
        <S.SkillWrapper>
          <S.SkillTitle>Design</S.SkillTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur. Curabitur fringilla sed ullamcorper mi turpis
            imperdiet lectus. Nulla risus enim bibendum lectus mauris. Nibh scelerisque pharetra
            urna suspendisse. Fusce donec nibh velit in gravida odio ante fringilla ridiculus.
            Ullamcorper at egestas tempor mi arcu arcu mattis.
          </Paragraph>
        </S.SkillWrapper>
      </S.SkillsRow>
    </Section>
  );
};

export default Skills;
