import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function screen2() {
  const router = useRouter();

  return (
    <View>
      <Text>hola desde Screen 2</Text>
      <Button title="Ir a screen 1" onPress={() => router.back()} />
    </View>
  );
}
