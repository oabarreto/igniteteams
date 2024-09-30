import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";
import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Minha Galera",
    "Amigos",
    "Trabalho",
  ]);

  const navigation = useNavigation();

  const handleCreateGroup = () => {
    navigation.navigate("new");
  };

  return (
    <Container>
      <Header />
      <Highlight title={"Galera"} subtitle={"Reuna sua galera"} />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar sua galera?" />
        )}
      />

      <Button title="Criar galera" onPress={handleCreateGroup} />
    </Container>
  );
}
