import React from 'react';
import { Container, User, Greeting, UserName, Message } from './styles';
import { View } from 'react-native';
import Avatar from '../Avatar';
import { useAuth } from '../../context/auth';
import { RectButton } from 'react-native-gesture-handler';

import { Alert } from 'react-native';

const Profile: React.FC = () => {
  const {
    user: { avatar, firstname },
    signOut,
  } = useAuth();

  const handleSignOut = () => {
    Alert.alert('Deseja sair do Gameplay', 'Para confirmar clique no Ok', [
      {
        text: 'Não',
        style: 'cancel',
      },
      { text: 'OK', onPress: () => signOut() },
    ]);
  };

  return (
    <Container>
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={avatar} />
      </RectButton>
      <View style={{ marginLeft: 20 }}>
        <User>
          <Greeting>Olá,</Greeting>
          <UserName>{firstname}</UserName>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
};

export default Profile;
