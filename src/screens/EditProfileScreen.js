import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Welcome to edit profile screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
