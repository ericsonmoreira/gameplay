import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Input } from './styles';

const Signin: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Text>Ola Mundo!</Text>
      <Input value={text} onChangeText={setText} />
      <Text>Você digitou: {text}</Text>
    </Container>
  );
};

export default Signin;
