import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 40px;
  text-align: center;
  margin-bottom: 16px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;
