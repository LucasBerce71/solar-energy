import { useContext } from "react";
import {
  Container,
  ReceivedValue,
  ExpectedValue,
  ReceivedValueLabel,
  ExpectedValueLabel,
  ExpectedValueText,
  ReceivedValueText,
} from "./style";
import { AppContext } from "../../contexts/AppContext";

export default function ProgressChart() {
  const { expectedGenerationValue, apiData } = useContext(AppContext);

  return (
    <Container>
      <ExpectedValue>
        <ExpectedValueLabel>Valor Esperado</ExpectedValueLabel>
        <ExpectedValueText>{expectedGenerationValue.toFixed(2)} kWh</ExpectedValueText>
      </ExpectedValue>
      <ReceivedValue style={{ width: apiData ? apiData?.data?.totals?.percentage : 0  + "%" }}>
        <ReceivedValueLabel>Valor Total</ReceivedValueLabel>
        <ReceivedValueText>{apiData?.data?.totals?.kwh.toFixed(2)} kWh</ReceivedValueText>
      </ReceivedValue>
    </Container>
  );
}
