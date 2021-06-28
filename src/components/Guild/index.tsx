import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps, View } from 'react-native';
import { theme } from '../../theme';
import GuildIcon from '../GuildIcon';
import { Container, Content, Title, Type } from './styles';

export interface GuildData {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export type GuildProps = TouchableOpacityProps & {
  data: GuildData;
};

const Guild: React.FC<GuildProps> = (props) => {
  const { data, ...rest } = props;
  return (
    <Container activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <Content>
        <View>
          <Title>{data.name}</Title>
          <Type>{data.owner ? 'Administrador' : 'Convidado'}</Type>
        </View>
      </Content>
      <Feather name="chevron-right" color={theme.colors.heading} size={24} />
    </Container>
  );
};

export default Guild;
