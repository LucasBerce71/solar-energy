import styled from "styled-components/native";

import { theme } from "../../theme";

export const Container = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 300;

  color: ${theme.colors.white};
`;

export const Headline = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 48px;
`;
