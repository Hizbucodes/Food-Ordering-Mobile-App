import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { PizzaSize } from "@/types";
import Colors from "@/constants/Colors";
import Button from "@/components/Button";
import { useCart } from "@/providers/CartProvider";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const [selectedPizzaSize, setSelectedPizzaSize] = useState<PizzaSize>("M");

  const product = products.find((product) => product?.id.toString() === id);

  console.log("Product: ", product?.name);

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedPizzaSize);
  };

  return (
    <>
      <Stack.Screen
        options={{ title: product?.name, headerTitleAlign: "center" }}
      />
      <View style={styles.container}>
        <Image
          source={{ uri: product?.image || defaultPizzaImage }}
          style={styles.image}
        />
        <Text style={styles.selectPizzaSizeTitle}>Select size</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {sizes?.map((size) => {
            return (
              <Pressable
                onPress={() => setSelectedPizzaSize(size)}
                key={size}
                style={{
                  backgroundColor:
                    selectedPizzaSize === size ? "gainsboro" : "white",
                  borderRadius: 50,
                  width: 50,
                  aspectRatio: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: selectedPizzaSize === size ? "black" : "gray",
                  }}
                >
                  {size}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: "auto" }}>
          ${product?.price}
        </Text>
        <Button text="Add to Cart" onPress={addToCart} />
      </View>
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
  },
  selectPizzaSizeTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
