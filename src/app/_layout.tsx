import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import color from "../../pewarnaan/color";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: color.background }}>
        <Stack
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="tabs" />
          <Stack.Screen name="recipe/[id]" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
