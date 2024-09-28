import { GroupCard } from "@components/GroupCard";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title={"Galera"} subtitle={"Reuna sua galera"} />

      <GroupCard title={"Galera do trabalho"} />
    </Container>
  );
}
