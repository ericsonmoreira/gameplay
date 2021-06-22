import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const User = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 24px;
  margin-right: 6px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 24px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
`;