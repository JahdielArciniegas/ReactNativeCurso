import { darkTheme, lightTheme } from "@/styles/theme";
import { useRouter } from "expo-router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
// eslint-disable-next-line import/no-named-as-default
import styled, { ThemeProvider } from "styled-components/native";
import { useState } from "react";

export default function Screen1() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Container>
        <ImageContainer source={require("../assets/images/icon.png")} />
      </Container>
    </ThemeProvider>
  );
}

const ImageContainer = styled.Image`
  width: 100px;
  height: 100px;
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
