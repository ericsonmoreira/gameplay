import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.heading};
`;

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`;

export const Title = styled.View`
  margin: 36px 24px 18px;
`;

export const Img = styled.View`
  width: 64px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.secondary50};
  border-radius: 8px;
`;

export const Select = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 68px;
  border: 1px solid ${({ theme }) => theme.colors.secondary50};
  border-radius: 8px;
  padding-right: 25px;
  overflow: hidden;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;
