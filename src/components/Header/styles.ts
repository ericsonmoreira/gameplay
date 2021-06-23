import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient)`
  width: 100%;
  height: 74px;
  margin-top: ${getStatusBarHeight()}px;
  padding: 0 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 20px;
`;
