import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href={"/menu/"} />;
};

export default index;
