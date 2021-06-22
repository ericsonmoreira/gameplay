import React from 'react';

import { Container, Header } from './styles';
import Profile from '../../components/Profile';

const Home: React.FC = () => {
  return <Container>
    <Header>
      <Profile></Profile>

    </Header>
  </Container>;
};

export default Home;
