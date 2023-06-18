import { useContext, useEffect, useState } from "react";
import { VictoryLine, VictoryChart } from "victory-native";

import { AppContext } from "../../contexts/AppContext";

import { theme } from "../../theme";

import { ChartContent, Container } from "./style";

export default function Chart() {
  const {chartData, chartSize } = useContext(AppContext);

  return (
    <Container>
      <ChartContent horizontal>
        <VictoryChart width={chartSize}>
          <VictoryLine
            interpolation="natural"
            style={{
              data: {
                stroke: theme.colors.white,
              },
            }}
            data={chartData}
          />
        </VictoryChart>
      </ChartContent>
    </Container>
  );
};