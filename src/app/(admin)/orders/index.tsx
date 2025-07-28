import orders from "@assets/data/orders";
import React from "react";
import { FlatList, ListRenderItem, Text } from "react-native";

import OrderItems from "@/components/OrderItems";
import { Order } from "@/types";

const order = () => {
  const renderOrdersItem: ListRenderItem<Order> = ({ item }) => {
    return <OrderItems orderItem={item} />;
  };

  return (
    <FlatList
      data={orders}
      renderItem={renderOrdersItem}
      keyExtractor={(item) => item?.id.toString()}
      ListEmptyComponent={<Text>You dont have any orders</Text>}
      contentContainerStyle={{ margin: 10, rowGap: 15 }}
      ListFooterComponentStyle={{ marginVertical: 20 }}
      ListFooterComponent={
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>
          {orders?.length > 10 ? "End of Orders" : null}
        </Text>
      }
    />
  );
};

export default order;
