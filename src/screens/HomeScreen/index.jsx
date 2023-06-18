import { Container, Headline, Title } from "./style";
import Filter from "../../components/Filter";
import CardResult from "../../components/CardResult";
import Chart from "../../components/Chart";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AntDesign } from "@expo/vector-icons";
import ProgressChart from "../../components/ProgressChart";

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
}
