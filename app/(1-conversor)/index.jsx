import styled from "styled-components/native";
import { View, Text } from "react-native";
import {router} from "expo-router";

export default function Componente() {
  return (
    <Container>
      <Icon source="https://i.ibb.co/dk609rM/medida-1.png" />
      <Title>Conversor</Title>
      <Subtitle>(cm) a (m)</Subtitle>
      <StartButton onPress={() => router.push("/conversor")}>
        <ButtonText>Iniciar</ButtonText>
      </StartButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7e7ce;
`;

const Title = styled.Text`
font-size: 50px;
font-weight: bold;
color: #614e3e;
margin-bottom: 20px;
`;

const Subtitle = styled.Text`
font-size: 40px;
color: #614e3e;
margin-bottom: 20px;
margin-top: 20px;
font-weight: bold;
`;

const StartButton = styled.TouchableOpacity`
background-color: #decf93;
padding: 15px 30px;
border-radius: 8px;
`;

const ButtonText = styled.Text`
color: #614e3e;
font-size: 25px;
font-weight: bold;
`;

const Icon = styled.Image`
width: 150px;
height: 150px;
margin-bottom: 20px;
`;
