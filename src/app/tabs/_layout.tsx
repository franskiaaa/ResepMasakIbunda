import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import color from "../../../pewarnaan/color";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: color.Active, 
        tabBarInactiveTintColor: color.Inactive,
        tabBarStyle: { 
            backgroundColor: color.barBackground, 
            paddingBottom: 0,
            paddingTop: 15,
        }
     }}>

      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color, size }) => 
        <Ionicons name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="recipe" options={{ title: "Recipe", tabBarIcon: ({ color, size }) => 
        <Ionicons name="receipt" size={size} color={color} /> }} />
    </Tabs>
  );
}