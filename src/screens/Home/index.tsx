import React from 'react';

import { Container, Header } from './styles';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';

import { ScrollView } from 'react-native';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 40,
        }}
      >
        

      </ScrollView>
    </Container>
  );
};

export default Home;
