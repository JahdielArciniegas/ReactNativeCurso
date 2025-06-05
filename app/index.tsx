import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function screen1() {
  const router = useRouter();

  return (
    <View>
      <Text>hola desde Screen 1</Text>
      <Button title="Ir a screen 2" onPress={() => router.push("/screen2")} />
    </View>
  );
}
