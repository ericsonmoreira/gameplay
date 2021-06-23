import { useNavigation } from '@react-navigation/native';
import React from 'react';
import IllustrationPng from '../../assets/illustration.png';
import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';
import RoutesNames from '../../routes/names.routes';
import { Container, Content, Img, Subtitle, Title } from './styles';

const Signin: React.FC = () => {
  const navigation = useNavigation();

  const handleSignin = () => {
    navigation.navigate(RoutesNames.Home);
  };

  return (
    <Background>
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
          <ButtonIcon onPress={handleSignin} title="Entrar com Discord" />
        </Content>
      </Container>
    </Background>
  );
};

export default Signin;
