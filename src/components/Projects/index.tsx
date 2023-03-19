import React from 'react';
import { Section } from '../../layout/containers';
import Card from '../Card';
import * as S from './styles';

const projects = [
  {
    id: 1,
    title: 'Guia serve',
    text: 'Lorem ipsum dolor sit amet consectetur. Curabitur fringilla sed ullamcorper mi turpis imperdiet lectus. Nulla risus enim bibendum lectus mauris.',
    cover:
      'https://images.unsplash.com/photo-1678798694643-2b8fddcf900f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    link: ''
  },
  {
    id: 2,
    title: 'Guia serve',
    text: 'Lorem ipsum dolor sit amet consectetur. Curabitur fringilla sed ullamcorper mi turpis imperdiet lectus. Nulla risus enim bibendum lectus mauris.',
    cover:
      'https://images.unsplash.com/photo-1678798694643-2b8fddcf900f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    link: ''
  },
  {
    id: 3,
    title: 'Guia serve',
    text: 'Lorem ipsum dolor sit amet consectetur. Curabitur fringilla sed ullamcorper mi turpis imperdiet lectus. Nulla risus enim bibendum lectus mauris.',
    cover:
      'https://images.unsplash.com/photo-1678798694643-2b8fddcf900f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    link: ''
  },
  {
    id: 4,
    title: 'Guia serve',
    text: 'Lorem ipsum dolor sit amet consectetur. Curabitur fringilla sed ullamcorper mi turpis imperdiet lectus. Nulla risus enim bibendum lectus mauris.',
    cover:
      'https://images.unsplash.com/photo-1678798694643-2b8fddcf900f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    link: ''
  },
  {
    id: 5,
    title: 'Guia serve',
    text: 'Lorem ipsum dolor sit amet consectetur. Curabitur fringilla sed ullamcorper mi turpis imperdiet lectus. Nulla risus enim bibendum lectus mauris.',
    cover:
      'https://images.unsplash.com/photo-1678798694643-2b8fddcf900f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    link: ''
  }
];

const Projects: React.FC = () => {
  return (
    <Section>
      <S.Title>Projects</S.Title>
      <S.GridWrapper>
        {projects.map((project) => {
          const { id, cover, title, link, text } = project;
          return <Card key={id} cover={cover} title={title} link={link} text={text} />;
        })}
      </S.GridWrapper>
    </Section>
  );
};

export default Projects;
