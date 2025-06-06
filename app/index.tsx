import { useRouter } from "expo-router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Text, View } from "react-native";
// eslint-disable-next-line import/no-named-as-default
import styled from "styled-components/native";

export default function Screen1() {
  const router = useRouter();

  return (
    <View>
      <Title>hola desde Screen 1</Title>
      <Button title="Ir a screen 2" onPress={() => router.push("/screen2")} />
    </View>
  );
}

const Title = styled.Text`
  color: #82f13c;
  font-size: 42px;
`;
