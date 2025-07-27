import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Order, OrderItem } from "@/types";
import { Link } from "expo-router";
import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type OrderItemsProps = {
  orderItem: Order;
};

const OrderItems = ({ orderItem }: OrderItemsProps) => {
  return (
    <Link
      asChild
      href={{
        pathname: "/(user)/orders/[id]",
        params: { id: `${orderItem?.id}` },
      }}
    >
      <Pressable style={styles.container}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Order #{orderItem.order_items?.map((item) => item?.id)}
          </Text>
          <Text
            style={{ color: "gray", fontWeight: "500", letterSpacing: 0.2 }}
          >
            {dayjs(orderItem?.created_at).fromNow()}
          </Text>
        </View>

        <Text style={{ fontWeight: "500", fontSize: 14 }}>
          {orderItem?.status}
        </Text>
      </Pressable>
    </Link>
  );
};

export default OrderItems;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 5,
    height: 80,
  },
});
