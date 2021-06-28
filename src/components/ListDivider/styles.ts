import styled, { css } from 'styled-components/native';

interface IsCenteredable {
  isCentered?: boolean;
}

const centered = css`
  margin: 12px 0;
`;

const nocCentered = css`
  margin: 2px 0 31px;
`;

export const Container = styled.View<IsCenteredable>`
  width: 78%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary40};
  align-self: flex-end;
  ${({ isCentered }) => (isCentered ? centered : nocCentered)}
`;
