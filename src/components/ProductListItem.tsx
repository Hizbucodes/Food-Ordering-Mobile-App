import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Product } from "../types";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product?.image || defaultPizzaImage,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{product?.name}</Text>
      <Text style={styles.title}>{product?.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
