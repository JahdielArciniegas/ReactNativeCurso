import { darkTheme, lightTheme } from "@/styles/theme";
import { useRouter } from "expo-router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Text, View } from "react-native";
// eslint-disable-next-line import/no-named-as-default
import styled, { ThemeProvider } from "styled-components/native";
import { useState } from "react";

export default function Screen1() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const router = useRouter();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;
  const data = {
    nombre: "Frank",
    curso: "React Native",
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Title>hola desde Screen 1</Title>
        <Button
          title="Ir a screen 2"
          onPress={() =>
            router.push({
              pathname: "/screen2",
              params: data,
            })
          }
        />
        <Button title="Cambiar tema" onPress={toggleTheme} />
      </Container>
    </ThemeProvider>
  );
}

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 42px;
`;
const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
