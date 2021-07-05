import styled from 'styled-components/native';

export const Img = styled.Image`
  width: 62px;
  height: 66px;
`;

export const Container = styled.View`
  width: 62px;
  height: 66px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.discord};
  align-items: center;
  justify-content: center;
`;
