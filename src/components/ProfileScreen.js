import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

      <View>
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="mail-outline" size={24} color="black" />
            <Text style={styles.profileTitle}>Inbox</Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="people-outline" size={24} color="black" />
            <Text style={styles.profileTitle}>My Team</Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="search-outline" size={24} color="black" />
            <Text style={styles.profileTitle}>Search</Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.profileTitle}>Updates</Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>
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

  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  profileItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileArrow: {
    fontSize: 24,
  },
});
