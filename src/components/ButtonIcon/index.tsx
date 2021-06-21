import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import DiscordPng from '../../assets/discord.png';
import { Container, Icon, IconWrraper, Label } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  title: string;
};

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { title, activeOpacity } = props;

  return (
    <Container activeOpacity={activeOpacity}>
      <IconWrraper>
        <Icon source={DiscordPng} />
      </IconWrraper>
      <Label>{title}</Label>
    </Container>
  );
};

export default ButtonIcon;
