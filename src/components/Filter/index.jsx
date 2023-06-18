import { useContext, useRef, useState } from "react";
import { Picker } from "@react-native-picker/picker";

import { AppContext } from "../../contexts/AppContext";

import { Container, Text, PickerStyled } from "./style";

export default function Filter() {
  const { dataType, updateDataType } = useContext(AppContext);
  const pickerRef = useRef();

  const onPress = () => pickerRef.current.focus();

  return (
    <Container onPress={onPress}>
      <Text>Filtrar</Text>

      <PickerStyled
        selectedValue={dataType}
        onValueChange={(itemValue, itemIndex) => updateDataType(itemValue)}
        ref={pickerRef}
      >
        <Picker.Item label="Horário" value="hourly" />
        <Picker.Item label="Diário" value="daily" />
        <Picker.Item label="Mensal" value="monthly" />
        <Picker.Item label="Anual" value="yearly" />
      </PickerStyled>
    </Container>
  );
}
