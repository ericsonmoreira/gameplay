import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 27px 24px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 18px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 13px;
`;
