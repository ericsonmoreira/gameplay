import styled from 'styled-components/native';

interface Onlineable {
  online?: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.View`
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Sphere = styled.View<Onlineable>`
  width: 8px;
  height: 8px;
  margin-right: 9px;
  border-radius: 4px;
  background-color: ${({ theme, online }) =>
    online ? theme.colors.on : theme.colors.primary};
`;

export const NameStatus = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.highlight};
`;
