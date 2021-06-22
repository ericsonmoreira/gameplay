import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.secondary80, theme.colors.secondary100],
}))`
  flex: 1;
`;
