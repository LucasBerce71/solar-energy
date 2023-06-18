import { Picker } from "@react-native-picker/picker";
import { Container, Text } from "./style";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function Filter() {
  const { dataType, updateDataType } = useContext(AppContext);
  const pickerRef = useRef();

  const onPress = () => {
    pickerRef.current.focus();
  };

  return (
    <Container onPress={onPress}>
      <Text>Filtrar</Text>

      <Picker
        selectedValue={dataType}
        onValueChange={(itemValue, itemIndex) => updateDataType(itemValue)}
        ref={pickerRef}
        style={{ display: "none" }}
      >
        <Picker.Item label="Horário" value="hourly" />
        <Picker.Item label="Diário" value="daily" />
        <Picker.Item label="Mensal" value="monthly" />
        <Picker.Item label="Anual" value="yearly" />
      </Picker>
    </Container>
  );
}
