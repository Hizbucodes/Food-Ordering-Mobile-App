import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const MenuStack = () => {
  return (
    <Stack
      screenOptions={{
        headerRight: () => (
          <Link href={"/cart"} asChild>
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  color={Colors.light.tint}
                  size={25}
                  name="shopping-cart"
                  style={{ marginRight: 10, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Menu", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};

export default MenuStack;
