import { useContext } from "react";

import { AppContext } from "../../contexts/AppContext";

import {
  Container,
  ReceivedValue,
  ExpectedValue,
  ReceivedValueLabel,
  ExpectedValueLabel,
  ExpectedValueText,
  ReceivedValueText,
} from "./style";

export default function ProgressChart() {
  const { expectedGenerationValue, apiData } = useContext(AppContext);

  return (
    <Container>
      <ExpectedValue>
        <ExpectedValueLabel>Valor Esperado</ExpectedValueLabel>
        <ExpectedValueText>{expectedGenerationValue.toFixed(2)} kWh</ExpectedValueText>
      </ExpectedValue>
      <ReceivedValue totalPercentage={apiData?.data?.totals?.percentage}>
        <ReceivedValueLabel>Valor Total</ReceivedValueLabel>
        <ReceivedValueText>{apiData?.data?.totals?.kwh.toFixed(2)} kWh</ReceivedValueText>
      </ReceivedValue>
    </Container>
  );
}
