import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightSymbol}>C</Text>
      </View>
      <Text style={styles.text}>Avinx Nation</Text>
      <Text style={styles.text}>All Rights Reserved 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    alignItems: "center",
  },
  copyrightContainer: {
    width: 30,
    height: 30,
    backgroundColor: "#ccc",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  copyrightSymbol: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
});
