import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} {...props} />;
}

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors.light.tint },
        tabBarActiveTintColor: Colors.light.background,
        tabBarInactiveTintColor: "gainsboro",
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />

      <Tabs.Screen
        name="menu"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Menu",
          title: "Menu",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cutlery" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
