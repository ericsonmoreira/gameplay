import React from 'react';
import { StatusBar } from 'react-native';
import IllustrationPng from '../../assets/illustration.png';
import { Container, Content, Img, Subtitle, Title } from './styles';
import ButtonIcon from '../../components/ButtonIcon';

const Signin: React.FC = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Img source={IllustrationPng} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se{'\n'}e organize suas{'\n'}
          jogatinas
        </Title>
        <Subtitle>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Subtitle>
        <ButtonIcon />
      </Content>
    </Container>
  );
};

export default Signin;
