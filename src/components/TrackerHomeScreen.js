import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function TrackerHomeScreen() {
  return (
    <View style={styles.container}>
      <Text> Time To Track you </Text>
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
