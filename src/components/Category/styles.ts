import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

interface Checkable {
  checked?: boolean;
}

export const IconWrapper = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
`;

export const Content = styled(LinearGradient)`
  width: 100px;
  height: 116px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 20px 0;
`;

export const Square = styled.View<Checkable>`
  width: 12px;
  height: 12px;
  align-self: flex-end;
  background-color: ${({ theme, checked }) =>
    !checked ? theme.colors.secondary100 : theme.colors.primary};
  border: ${({ theme }) => theme.colors.secondary50} solid 3px;
  border-radius: 3px;
  position: absolute;
  right: 7px;
  top: 7px;
`;

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.colors.secondary50, theme.colors.secondary70],
}))`
  width: 104px;
  height: 120px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-right: 8px;
  position: relative;
`;
