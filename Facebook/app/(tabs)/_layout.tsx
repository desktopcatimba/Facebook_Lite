import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#008069", // cor verde estilo WhatsApp
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: "Estado",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="aperture" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="call"
        options={{
          title: "Chamadas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
