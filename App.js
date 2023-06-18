import { StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { theme } from "./src/theme";
import Header from "./src/components/Header";
import { Container } from "./src/styles";
import { AppProvider } from "./src/contexts/AppContext";

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
