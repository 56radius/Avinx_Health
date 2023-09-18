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
import { Entypo } from "@expo/vector-icons"; // Import Entypo for the right arrow

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
          <Text style={styles.normalText}>Wednesday,</Text> {"\n"}
          <Text style={styles.highlightedText}>November 17</Text>
        </Text>
      </View>

      {/* Second Routine Card */}
      <View style={styles.routineCard}>
        {/* Left Image */}

        {/* Text and Checkbox */}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Today's self check in</Text>
        </View>

        {/* Right Arrow */}
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
    paddingHorizontal: 30,
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
    height: 72,
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: "#E0E0E0",
    borderColor: "#E0E0E0",
    padding: 20,
  },
  cardImage: {
    width: 55,
    height: 70,
    marginLeft: 20,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10, // Adjust as needed
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
