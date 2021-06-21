import React from 'react';
import DiscordPng from '../../assets/discord.png';
import { Container, Icon, IconWrraper, Label } from './styles';

const ButtonIcon: React.FC = () => {
  return (
    <Container>
      <IconWrraper>
        <Icon source={DiscordPng} />
      </IconWrraper>
      <Label>Entrar com Discord</Label>
    </Container>
  );
};

export default ButtonIcon;
