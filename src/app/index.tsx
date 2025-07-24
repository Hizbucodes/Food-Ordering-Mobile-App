import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";

const index = () => {
  const product = products[1];

  return (
    <View style={styles.container}>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[3]} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
