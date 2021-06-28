import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { GuildData } from '../Guild';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 24px;
`;

export const GuildsList = styled(FlatList as new () => FlatList<GuildData>)`
  width: 100%;
`;
