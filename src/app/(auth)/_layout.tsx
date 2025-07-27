import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const AuthLayoutScreen = () => {
  return (
    <Stack>
      <Stack.Screen
        name="signin"
        options={{ title: "Sign in", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="signup"
        options={{ title: "Sign up", headerTitleAlign: "center" }}
      />
    </Stack>
  );
};

export default AuthLayoutScreen;
