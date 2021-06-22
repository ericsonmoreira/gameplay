import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import DiscordPng from '../../assets/discord.png';
import { Container, Icon, IconWrraper, Label } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
};

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { title, ...rest } = props;

  return (
    <Container {...rest}>
      <IconWrraper>
        <Icon source={DiscordPng} />
      </IconWrraper>
      <Label>{title}</Label>
    </Container>
  );
};

export default ButtonIcon;
