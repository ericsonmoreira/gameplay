import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const Label = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.text500};
  font-size: 15px;
  text-align: center;
`;