import { View, Text, StyleSheet, ScrollView } from "react-native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardHomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text> Camera Wowo bitshes </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
});
