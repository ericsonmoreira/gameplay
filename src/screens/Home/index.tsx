import React from 'react';

import { Container, Header } from './styles';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';

const Home: React.FC = () => {
  return <Container>
    <Header>
      <Profile />
      <ButtonAdd />
    </Header>
  </Container>;
};

export default Home;
