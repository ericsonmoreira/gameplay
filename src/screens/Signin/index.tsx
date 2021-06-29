import React from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import IllustrationPng from '../../assets/illustration.png';
import Background from '../../components/Background';
import ButtonIcon from '../../components/ButtonIcon';
import { useAuth } from '../../context/auth';
import { theme } from '../../theme';
import { Container, Content, Img, Subtitle, Title } from './styles';

const Signin: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { signIn, loading } = useAuth();

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

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon onPress={handleSignin} title="Entrar com Discord" />
          )}
        </Content>
      </Container>
    </Background>
  );
};

export default Signin;
