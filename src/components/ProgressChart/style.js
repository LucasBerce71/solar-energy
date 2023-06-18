import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  position: relative;

  margin-bottom: 40px;

  height: 15px;
`;

export const ExpectedValue = styled.View`
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;

  background-color: ${theme.colors.primary};

  height: 100%;

  flex-direction: row;
  justify-content: flex-end;

`;

export const ReceivedValue = styled.View`
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;

  position: absolute;
  top: 0;
  left: 0;

  height: 100%;

  background-color: ${theme.colors.tertiary};

`;

export const ExpectedValueLabel= styled.Text`
  position: absolute;
  color: ${theme.colors.white};
  top: -20px;

  font-size: 11px;

`;


export const ReceivedValueLabel= styled.Text`
  position: absolute;
  top: -20px;
  color: ${theme.colors.white};

  font-size: 11px;
`;


export const ExpectedValueText= styled.Text`
  position: absolute;
  color: ${theme.colors.white};
  bottom: -20px;

  font-size: 14px;

`;


export const ReceivedValueText= styled.Text`
  position: absolute;
  bottom: -20px;
  color: ${theme.colors.white};

  font-size: 14px;
`;
