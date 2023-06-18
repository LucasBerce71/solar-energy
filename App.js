import { StatusBar } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

import Header from "./src/components/Header";

import { AppProvider } from "./src/contexts/AppContext";

import { theme } from "./src/theme";

import { Container } from "./src/styles";

export default function App() {

  return (
    <AppProvider>
      <Container>
        <Header />
        <HomeScreen />

        <StatusBar backgroundColor={theme.colors.secondary} />
      </Container>
    </AppProvider>
  );
}
