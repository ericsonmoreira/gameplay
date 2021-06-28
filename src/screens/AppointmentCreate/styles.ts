import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

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

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.colors.highlight};
`;

export const CaractersLimit = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.highlight};
`;

export const Footer = styled.View`
  margin: 20px 0px 56px;
`;
