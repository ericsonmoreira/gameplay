import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(ScrollView).attrs(() => ({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 40,
  },
}))`
  min-height: 120px;
  max-height: 120px;
  padding-left: 24px;
`;
