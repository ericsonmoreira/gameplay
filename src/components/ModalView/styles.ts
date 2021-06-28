import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.overlay};
`;

export const Bar = styled.View`
  width: 30px;
  height: 2px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.secondary30};
  align-self: center;
  margin-top: 13px;
`;
