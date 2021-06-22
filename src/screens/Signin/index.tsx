import React from 'react';
import IllustrationPng from '../../assets/illustration.png';
import { Container, Content, Img, Subtitle, Title } from './styles';
import ButtonIcon from '../../components/ButtonIcon';

const Signin: React.FC = () => {
  return (
    <Container>
      
      <Img source={IllustrationPng} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se{'\n'}e organize suas{'\n'}
          jogatinas
        </Title>
        <Subtitle>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Subtitle>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </Content>
    </Container>
  );
};

export default Signin;
