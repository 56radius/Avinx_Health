import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";

// Vector iCons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//firebase authentication
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../backend/firebase.config";

const dbRef = getFirestore(app);
export default function TasksScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={styles.StyleText}>
          <Text style={styles.normalText}>Wednesday,</Text> {"\n"}
          <Text style={styles.highlightedText}>November 17</Text>
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
  headerTitle: {
    alignSelf: "flex-start",
    paddingHorizontal: 30, // You can adjust this value as needed
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
});
