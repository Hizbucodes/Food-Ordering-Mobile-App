import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Product } from "../types";
import { Link } from "expo-router";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link
      href={{ pathname: "/menu/[id]", params: { id: product?.id } }}
      asChild
    >
      <TouchableOpacity style={styles.container}>
        <Image
          source={{
            uri: product?.image || defaultPizzaImage,
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.title}>{product?.price}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    padding: 10,
    maxWidth: "50%",
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
