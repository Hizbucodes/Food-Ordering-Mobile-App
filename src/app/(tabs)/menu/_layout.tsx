import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MenuStack = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Menu", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};

export default MenuStack;
