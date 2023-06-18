import { Container, Icon, Result, Text } from "./style";

export default function CardResult({ label, result, icon }) {
  return (
    <Container>
      <Text>{label}</Text>
      <Result>{result}</Result>

      <Icon>
      {icon}
      </Icon>
    </Container>
  );
}
