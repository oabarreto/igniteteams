import styled from "styled-components/native";
import { CaretLeft, House } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  gap: 12px;
`;

export const Button = styled.TouchableOpacity``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;

export const HomeIcon = styled(House).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;
