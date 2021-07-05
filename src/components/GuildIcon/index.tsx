import React from 'react';
import { CDN_IMAGE } from '../../configs';
import { Container, Img } from './styles';
import DiscordSvg from '../../assets/discord.svg';

interface GuildIconProps {
  guildId: string;
  iconId: string | null;
}

const GuildIcon: React.FC<GuildIconProps> = (props) => {
  const { guildId, iconId } = props;

  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

  return (
    <Container>
      {guildId && iconId ? (
        <Img source={{ uri }} resizeMode="cover" />
      ) : (
        <DiscordSvg width={40} height={40} />
      )}
    </Container>
  );
};

export default GuildIcon;
