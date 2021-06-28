import React from 'react';
import { Container } from './styles';

interface ListDividerProps {
  isCentered?: boolean;
}

const ListDivider: React.FC<ListDividerProps> = ({ isCentered }) => {
  return <Container isCentered={isCentered} />;
};

export default ListDivider;
