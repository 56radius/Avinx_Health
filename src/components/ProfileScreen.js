import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

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

      {/* List */}
      <View style={{ paddingVertical: 25 }}>
        {/* Edit Profile */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <AntDesign name="edit" size={24} color="black" />
            <Text style={styles.profileTitle}> Profile </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* */}
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
            <Text style={styles.profileTitle}> Search </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Help and support */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="ios-help-circle" size={24} color="black" />
            <Text style={styles.profileTitle}> Support </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <AntDesign name="setting" size={24} color="black" />
            <Text style={styles.profileTitle}> Settings </Text>
          </View>
          <Text style={styles.profileArrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Log out button */}
      <View style={{ width: "60%" }}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
          }}
        >
          <Text> Log Out </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
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
    marginLeft: 190,
  },
});
