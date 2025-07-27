import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const MenuStack = () => {
  return (
    <Stack
      screenOptions={{
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerTitleAlign: "center",
          headerRight: () => (
            <Link href={"/"} asChild>
              <Pressable>
                {({ pressed }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",

                      columnGap: 5,
                      width: "100%",
                    }}
                  >
                    <FontAwesome
                      color={Colors.light.tint}
                      size={25}
                      name="plus-square-o"
                      style={{ opacity: pressed ? 0.5 : 1 }}
                    />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 14,
                        color: Colors.light.tint,
                      }}
                    >
                      Create
                    </Text>
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Menu",
          headerTitleAlign: "center",
          headerRight: () => (
            <Link href={"/"} asChild>
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
    </Stack>
  );
};

export default MenuStack;
