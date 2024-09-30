import { useNavigation } from "@react-navigation/native";
import {
  Button,
  BackIcon,
  HomeIcon,
  ButtonContainer,
  Container,
  Logo,
} from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoHome = () => {
    navigation.navigate("groups");
  };

  return (
    <Container>
      {showBackButton && (
        <ButtonContainer>
          <Button onPress={handleGoBack}>
            <BackIcon />
          </Button>
          <Button onPress={handleGoHome}>
            <HomeIcon />
          </Button>
        </ButtonContainer>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
