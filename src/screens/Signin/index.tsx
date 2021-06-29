// import { useNavigation } from '@react-navigation/native';
import React from 'react';
import IllustrationPng from '../../assets/illustration.png';
import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';
import { useAuth } from '../../context/auth';
// import RoutesNames from '../../routes/names.routes';
import { Container, Content, Img, Subtitle, Title } from './styles';

import { Alert } from 'react-native';
const Signin: React.FC = () => {
  // const navigation = useNavigation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, signIn } = useAuth();

  const handleSignin = () => {
    // navigation.navigate(RoutesNames.Home);
    try {
      signIn();
    } catch (error) {
      Alert.alert(error);
    }
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
