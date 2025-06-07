import styled from "styled-components/native";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export default function Componente() {
  const [centimetros, setCentimetros] = useState(null);
  const [result, setResult] = useState(null);
  const Convertirdecmetro = () => {
    if(!centimetros){
      Alert.alert("Por favor ingresa un valor");
      return
    }
    const metros = parseFloat(centimetros) / 100;
    setResult(metros);
  }

  return (
    <Container>
      <Input placeholder="Ingrese los centimetros" keyboardType="numeric" onChangeText={setCentimetros}/>
      <CalculateButton onPress={Convertirdecmetro}>
        <ButtonText>Calcular</ButtonText>
      </CalculateButton>
      <ResultText>Resultado: {result!==null ? `${result} m` : ""}</ResultText>
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
