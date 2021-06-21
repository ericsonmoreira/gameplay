import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
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
  font-size: 15px;
  text-align: center;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`;

export const IconWrraper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-color: ${(props) => props.theme.colors.line};
  border-right-width: 1px;
`;
