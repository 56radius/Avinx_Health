import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function ChatHomeScreen() {
  return (
    <View style={styles.container}>
      <Text> Hi i'm AVA let's chat </Text>
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
