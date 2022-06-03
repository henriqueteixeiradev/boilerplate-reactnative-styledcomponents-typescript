import styled, { css } from "styled-components/native";

export const Conteiner = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 24px;
  ${({ theme }) =>
    css`
      font-size: ${theme.font.sizes.large};
    `}
`;
