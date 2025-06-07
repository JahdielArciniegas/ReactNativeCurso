import styled from "styled-components/native";
import { View, Text } from "react-native";
import { router } from "expo-router";

export default function Componente() {
  return (
    <Container>
      <Input />
      <CalculateButton>
        <ButtonText>Calcular</ButtonText>
      </CalculateButton>
      <ResultText>Resultado: -</ResultText>
      <BackButton onPress={() => router.back()}>
        <BackButtonText>Volver</BackButtonText>
      </BackButton>

    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f7e7ce;
`;

const Input = styled.TextInput`
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  border: none;
  font-size: 20px;
`
const CalculateButton = styled.TouchableOpacity`
background-color: #fff;
padding: 15px 30px;
border-radius: 8px;
margin-bottom: 20px;
`

const ButtonText = styled.Text`
color: #614e3e;
font-size: 18px;
font-weight: bold;
`;

const ResultText = styled.Text`
color: #614e3e;
font-size: 30px;
margin-bottom: 40px;
font-weight: bold;
`;


const BackButton = styled.TouchableOpacity`
background-color: #decf93;
padding: 10px 20px;
border-radius: 8px;
`

const BackButtonText = styled.Text`
color: #614e3e;
font-size: 16px;
font-weight: bold;
`
