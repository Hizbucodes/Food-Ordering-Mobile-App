import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SignUpScreen = () => {
  //Form Input States
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setErrors] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        placeholder="john@gmail.com"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={{ color: "red" }}>{error}</Text>
      <Button text="Create account" />

      <Link asChild href={"/(auth)/signup"}>
        <Text style={styles.textButton}>Sign in</Text>
      </Link>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    marginTop: 5,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "gray",
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
    borderRadius: 50,
  },
  textButton: {
    color: Colors.light.tint,
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginVertical: 10,
  },
});
