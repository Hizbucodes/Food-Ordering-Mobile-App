import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CartProvider from "@/providers/CartProvider";

const RootLayout = () => {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="cart" options={{ presentation: "modal" }} />
      </Stack>
    </CartProvider>
  );
};

export default RootLayout;
