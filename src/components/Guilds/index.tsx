import React from 'react';
import Guild, { GuildData } from '../Guild';
import ListDivider from '../ListDivider';
import { Container, GuildsList } from './styles';

interface GuildsProps {
  handleGuildSelect(guildSelect: GuildData): void;
}

const Guilds: React.FC<GuildsProps> = (props) => {
  const { handleGuildSelect } = props;
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png', // apenas simbolizando que tem uma imagem
      owner: true,
    },
    {
      id: '2',
      name: 'Comuns',
      icon: 'image.png', // apenas simbolizando que tem uma imagem
      owner: true,
    },
    {
      id: '3',
      name: 'Incomuns',
      icon: 'image.png', // apenas simbolizando que tem uma imagem
      owner: true,
    },
  ] as GuildData[];

  return (
    <Container>
      <GuildsList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
      />
    </Container>
  );
};

export default Guilds;
