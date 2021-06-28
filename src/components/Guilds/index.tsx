import React from 'react';
import Guild, { GuildData } from '../Guild';
import ListDivider from '../ListDivider';
import { Container, GuildsList } from './styles';
import data from './data';

interface GuildsProps {
  handleGuildSelect(guildSelect: GuildData): void;
}

const Guilds: React.FC<GuildsProps> = (props) => {
  const { handleGuildSelect } = props;

  return (
    <Container>
      <GuildsList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 100 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    </Container>
  );
};

export default Guilds;
