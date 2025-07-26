import { useCart } from "@/providers/CartProvider";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const CartScreen = () => {
  const { items } = useCart();

  return (
    <View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Text>Cart Items Lenght: {items?.length}</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
