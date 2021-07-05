import React, { useCallback, useEffect, useState } from 'react';
import Guild, { GuildData } from '../Guild';
import ListDivider from '../ListDivider';
import { Container, GuildsList } from './styles';
import Load from '../Load';
import api from '../../services/api';

interface GuildsProps {
  handleGuildSelect(guildSelect: GuildData): void;
}

const Guilds: React.FC<GuildsProps> = (props) => {
  const { handleGuildSelect } = props;

  const [guilds, setGuilds] = useState<GuildData[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchGuilds = useCallback(async () => {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);
    
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <Container>
      {loading ? (
        <Load />
      ) : (
        <GuildsList
          data={guilds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 100 }}
          ListHeaderComponent={() => <ListDivider isCentered />}
        />
      )}
    </Container>
  );
};

export default Guilds;
