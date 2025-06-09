import { FlatList, Text, View } from "react-native";

import styled from "styled-components/native";

export default function Home() {
  const dataRutas = [{ name: "1-conversor" }, { name: "teoria" }];

  const renderItem = ({ item }) => <Title>{item.name}</Title>;

  return (
    <Container>
      <Text>Menu</Text>
      <FlatList
        keyExtractor={(item) => item.name}
        data={dataRutas}
        renderItem={renderItem}
      />
    </Container>
  );
}

const Title = styled.Text`
  font-size: 20px;
  color: #614e3e;
`;

const Container = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
