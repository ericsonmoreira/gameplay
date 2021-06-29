import React from 'react';
import { Container, User, Greeting, UserName, Message } from './styles';
import { View } from 'react-native';
import Avatar from '../Avatar';
import { useAuth } from '../../context/auth';
const Profile: React.FC = () => {
  const {
    user: { avatar, firstname },
  } = useAuth();

  return (
    <Container>
      <Avatar urlImage={avatar} />
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
