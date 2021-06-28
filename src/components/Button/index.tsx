import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Label } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { title, ...rest } = props;

  return (
    <Container {...rest}>
      <Label>{title}</Label>
    </Container>
  );
};

export default Button;
