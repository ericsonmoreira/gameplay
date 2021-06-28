import React from 'react';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

const SmallInput: React.FC<TextInputProps> = (props) => {
  const { ...rest } = props;

  return <Container {...rest} />;
};

export default SmallInput;
