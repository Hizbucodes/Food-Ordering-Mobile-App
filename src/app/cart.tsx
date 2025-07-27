import Button from "@/components/Button";
import CartListItem from "@/components/CartListItem";
import { useCart } from "@/providers/CartProvider";
import { CartItem } from "@/types";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  ListRenderItem,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

const CartScreen = () => {
  const { items, total } = useCart();

  const renderCartItems: ListRenderItem<CartItem> = ({ item }) => {
    return <CartListItem cartItem={item} />;
  };

  return (
    <View style={{ padding: 10 }}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      {items?.length > 0 ? (
        <>
          <FlatList
            data={items}
            renderItem={renderCartItems}
            keyExtractor={(item) => String(item?.id)}
            contentContainerStyle={{ gap: 10 }}
          />
          <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 20 }}>
            Total: ${total.toFixed()}
          </Text>
          <Button text="Checkout" />
        </>
      ) : (
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
            marginTop: "50%",
          }}
        >
          Your Cart is Empty
        </Text>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
