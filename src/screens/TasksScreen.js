import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Vector iCons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

//firebase authentication
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../backend/firebase.config";

const dbRef = getFirestore(app);
export default function TasksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header Title/ Date title */}
      <View style={styles.headerTitle}>
        <Text style={styles.StyleText}>
          <Text style={styles.normalText}>Tuesday,</Text> {"\n"}
          <Text style={styles.highlightedText}>September 19</Text>
        </Text>
      </View>

      {/* Goal's text */}
      <View
        style={{
          alignSelf: "flex-start",
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text> Today's goals </Text>
      </View>

      {/* Goal/Task Card */}
      <View style={styles.routineCard}>
        {/* icon */}
        <View style={styles.Icon}>
          <Ionicons
            name="ios-shield-checkmark-outline"
            size={24}
            color="black"
          />
        </View>

        {/* Text and Checkbox */}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}> check-in </Text>
          <Text style={{ marginTop: 5 }}> Daily check-in </Text>
          {/* time icon beneath it */}
          <View>
            <Text style={{ marginTop: 5 }}>
              <MaterialCommunityIcons
                name="clock-time-nine-outline"
                size={15}
                color="black"
              />
              1 minute
            </Text>
          </View>
        </View>

        {/* Checkbox */}
        <View style={styles.checkbox}></View>
      </View>

      {/* Add more routine cards here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    alignSelf: "flex-start",
    paddingHorizontal: 20,
  },
  normalText: {
    // Your styles for normal text
  },
  highlightedText: {
    // Your styles for highlighted text
  },
  StyleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  routineCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    width: "89%",
    height: 100,
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
    borderColor: "#E0E0E0",
    padding: 20,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
    margin: 10, // Adjust as needed
  },
  cardTitle: {
    fontWeight: "bold",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    // Add styles for checked and unchecked states as needed
  },
});
