import React from 'react';
import { Container } from './styles';
import { TextInputProps } from 'react-native';

const TextArea: React.FC<TextInputProps> = (props) => {
  const { ...rest } = props;

  return <Container {...rest} style={{textAlignVertical: 'top'}} />;
};

export default TextArea;
