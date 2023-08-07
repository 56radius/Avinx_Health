import { View, Text, Image, StyleSheet } from "react-native";
import * as React from "react";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        {" "}
        Hello Did You Miss me? Hehe Get used to it hahaha **evil laughter**{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 30,
    paddingVertical: 90,
  },
});
