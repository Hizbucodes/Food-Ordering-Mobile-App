import Button from "@/components/Button";
import { defaultPizzaImage } from "@/components/ProductListItem";
import Colors from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  //Dynamic ID
  const { id } = useLocalSearchParams();

  const isUpdating = !!id;

  //Form Input States
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [error, setErrors] = useState<string>("");

  //Image Selection States
  const [image, setImage] = useState<string | null>(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const onSubmit = () => {
    if (isUpdating) {
      // update function
      onUpdate();
    } else {
      onCreate();
    }
  };

  //Create Product Function
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.log("Creating Product: ");
    resetFields();
  };

  //Create Product Function
  const onUpdate = () => {
    if (!validateInput()) {
      return;
    }
    console.log("Updating Product: ");
    resetFields();
  };

  //Reset Form Fields
  const resetFields = () => {
    setName("");
    setPrice("");
  };

  //Validate Form Input
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

  useEffect(() => {
    requestPermission();
  }, []);

  //Select Image Function
  const pickImage = async () => {
    // const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status?.granted !== true) {
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

  const onDelete = () => {
    console.warn("DELETE!!!!!");
  };

  const confirmDelete = () => {
    Alert.alert("Confirm", "Are you sure want to delete this product", [
      {
        text: "Cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDelete,
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          title: isUpdating ? "Update Product" : "Create Product",
        }}
      />
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
      <Button text={isUpdating ? "Update" : "Create"} onPress={onSubmit} />

      {isUpdating && (
        <Text onPress={confirmDelete} style={styles.textButton}>
          Delete
        </Text>
      )}
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
