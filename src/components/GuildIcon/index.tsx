import React from 'react';
import { Container } from './styles';

const GuildIcon: React.FC = () => {
  const uri =
    'https://cdn.iconscout.com/icon/free/png-512/discord-2474808-2056094.png';

  return <Container source={{ uri }} resizeMode="cover" />;
};

export default GuildIcon;
