import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Screen2() {
  const router = useRouter();

  return (
    <View>
      <Text>hola desde Screen 2</Text>
      <Button title="Ir a screen 1" onPress={() => router.back()} />
    </View>
  );
}
