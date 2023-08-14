import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* profile picture and name */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={require("../.././assets/clover.jpg")}
        />

        <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
          Merit Mohammed
        </Text>
      </View>
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
