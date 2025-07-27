import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import { useCart } from "@/providers/CartProvider";
import { PizzaSize } from "@/types";
import products from "@assets/data/products";
import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetail = () => {
  const router = useRouter();

  const { id } = useLocalSearchParams();
  const { addItem } = useCart();
  const [selectedPizzaSize, setSelectedPizzaSize] = useState<PizzaSize>("M");

  const product = products.find((product) => product?.id.toString() === id);

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedPizzaSize);
    router.push("/cart");
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: `${product?.name}`,
          headerTitleAlign: "center",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 10,
                      columnGap: 5,
                    }}
                  >
                    <FontAwesome
                      color={Colors.light.tint}
                      size={25}
                      name="pencil-square-o"
                      style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: Colors.light.tint,
                      }}
                    >
                      Edit
                    </Text>
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <View style={styles.container}>
        <Image
          source={{ uri: product?.image || defaultPizzaImage }}
          style={styles.image}
        />

        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {product?.name}
        </Text>

        <Text style={{ fontWeight: "500", fontSize: 18 }}>
          ${product?.price}
        </Text>
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
