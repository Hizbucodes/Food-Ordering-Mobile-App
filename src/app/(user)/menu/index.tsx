import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import products from "@assets/data/products";
import ProductListItem from "@components/ProductListItem";
import { Product } from "@/types";

const Index = () => {
  const renderItem: ListRenderItem<Product> = ({ item }) => {
    return <ProductListItem product={item} />;
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => String(item?.id)}
      numColumns={2}
      ListEmptyComponent={<Text>No products found.</Text>}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Index;

const styles = StyleSheet.create({});
