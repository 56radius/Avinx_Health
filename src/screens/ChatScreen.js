import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Hello </Text>
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
