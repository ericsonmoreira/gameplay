import React from 'react';
import { Container, Title, SubTitle } from './styles';

interface ListHeaderProps {
  title: string;
  subTitle: string;
}

const ListHeader: React.FC<ListHeaderProps> = (props) => {
  const { title, subTitle } = props;
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default ListHeader;
