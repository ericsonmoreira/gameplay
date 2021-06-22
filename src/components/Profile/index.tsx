import React from 'react';
import { Container, User, Greeting, UserName, Message } from './styles';
import { View } from 'react-native';
import Avatar from '../Avatar';
const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar urlImage="https://github.com/ericsonmoreira.png" />
      <View style={{ marginLeft: 20 }}>
        <User>
          <Greeting>Olá,</Greeting>
          <UserName>Ericson</UserName>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
};

export default Profile;
