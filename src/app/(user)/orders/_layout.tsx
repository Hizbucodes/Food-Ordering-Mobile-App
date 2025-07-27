import { Stack } from "expo-router";
import React from "react";

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitleAlign: "center" }} />
      <Stack.Screen name="[id]" options={{ headerTitleAlign: "center" }} />
    </Stack>
  );
};

export default OrdersLayout;
