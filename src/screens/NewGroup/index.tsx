import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { createGroup } from "@storage/group/createGroup";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  const handleCreate = async () => {
    try {
      await createGroup(group);
      navigation.navigate("players", { group });
    } catch (error) {
      console.log("1", error);
    }
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova galera"
          subtitle="Crie uma galera para adicionar pessoas"
        />

        <Input placeholder={"Nome da sua galera"} onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreate}
        />
      </Content>
    </Container>
  );
}
