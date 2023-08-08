import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardHomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header and greetings */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../.././assets/woman.jpg")}
          />
          <Text style={styles.greetingText}>
            Good Evening,
            {"\n"}
            <Text style={styles.userName}>Anu</Text>
          </Text>
        </View>

        {/* Notification Icons */}
        <View
          style={{
            borderWidth: 1,
            paddingHorizontal: 4,
            paddingVertical: 5,
            backgroundColor: "#D3D3D3",
            borderColor: "#D3D3D3",
            borderRadius: 2,
          }}
        >
          <Ionicons name="ios-notifications-outline" size={24} color="black" />
        </View>
      </View>

      {/* Card */}
      <View style={styles.cardHeader}>
        <View style={styles.textCardHeader}>
          <Text> Keep it up! </Text>
          <Text> You are never alone okay? {"\n"} Always remember that </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  greetingText: {
    marginLeft: 10,
    fontSize: 15,
  },

  userName: {
    fontWeight: "bold",
  },

  cardHeader: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    width: "89%",
    height: 130,
    marginTop: 40,
    borderRadius: 12,
  },
});
