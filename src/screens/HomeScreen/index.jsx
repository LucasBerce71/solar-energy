import { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

import Filter from "../../components/Filter";
import CardResult from "../../components/CardResult";
import ProgressChart from "../../components/ProgressChart";
import Chart from "../../components/Chart";

import { AppContext } from "../../contexts/AppContext";

import { Container, Headline, Title } from "./style";

export default function HomeScreen() {
  const { apiData } = useContext(AppContext);

  return (
    <Container>
      <Headline>
        <Title>Visão Geral</Title>
        <Filter />
      </Headline>

      <ProgressChart />
      <Chart />

      <CardResult
        icon={<AntDesign name="arrowup" size={24} color="white" />}
        label={"Quantidade de carbono evitado:"}
        result={apiData?.data?.totals?.kwh + " kWh"}
      />
      <CardResult
        icon={<AntDesign name="arrowup" size={24} color="white" />}
        label="Quantidade de árvores salvas:"
        result={apiData?.data?.totals?.trees + " árvores"}
      />
    </Container>
  );
};