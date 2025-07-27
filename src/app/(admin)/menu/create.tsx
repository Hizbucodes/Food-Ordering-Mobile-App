import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

const CreateProductScreen = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [error, setErrors] = useState<string>("");

  const [image, setImage] = useState<string | null>(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.log("Creating Product: ");
    resetFields();
  };

  const resetFields = () => {
    setName("");
    setPrice("");
  };

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Name is Required");
      return false;
    }

    if (!price) {
      setErrors("Price is Required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Price is not a Number");
      return false;
    }

    return true;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "We need access to your media library to pick an image."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Price</Text>
      <TextInput
        placeholder="9.99"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={{ color: "red" }}>{error}</Text>
      <Button text="create" onPress={onCreate} />
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
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
