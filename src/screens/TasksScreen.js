import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../backend/firebase.config";

const dbRef = getFirestore(app);

export default function TasksScreen({ navigation }) {
  // State to store today's date
  const [currentDate, setCurrentDate] = useState("");

  // Function to format the date as "Friday, September 22"
  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  // Update currentDate when the component mounts
  useEffect(() => {
    const today = new Date();
    const formattedDate = formatDate(today);
    setCurrentDate(formattedDate);
  }, []);

  const cardShadowStyle = Platform.select({
    ios: {
      shadowColor: "rgba(0,0,0,0.5)",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 0,
      },
    },
    android: {
      elevation: 5,
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header Title/ Date title */}
        <View style={styles.headerTitle}>
          <Text style={styles.StyleText}>
            <Text style={styles.normalText}>{currentDate}</Text> {"\n"}
          </Text>
        </View>
        {/* Tasks and session monitoring */}
        <View style={{ alignSelf: "flex-start", flexDirection: "row" }}>
          {/* first side left card */}
          <View
            style={{
              marginTop: 20,
              alignSelf: "flex-start",
              marginLeft: 20,
            }}
          >
            <Text style={{}}>
              <Text style={{ fontWeight: "bold" }}> 1 0f 3 tasks </Text> {"\n"}
              <Text style={{ margin: 20 }}> Daily Goals </Text>
            </Text>
          </View>

          {/* first side right card */}
          <View
            style={{
              marginTop: 20,
              alignSelf: "flex-start",
              marginLeft: 70,
            }}
          >
            <Text style={{}}>
              <Text style={{ fontWeight: "bold" }}> 0 of 3 sessions </Text>{" "}
              {"\n"}
              <Text style={{ margin: 20 }}> Weekly Goals </Text>
            </Text>
          </View>
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
        <View>
          {/* First card */}
          <View style={[styles.routineCard, cardShadowStyle]}>
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
                  <Text> 1 minute </Text>
                </Text>
              </View>
            </View>

            {/* Checkbox */}
            <View style={styles.checkbox}></View>
          </View>

          {/* Second card */}
          <View style={[styles.routineCard, cardShadowStyle]}>
            {/* icon */}
            <View style={styles.Icon}>
              <MaterialCommunityIcons
                name="meditation"
                size={24}
                color="black"
              />
            </View>

            {/* Text and Checkbox */}
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}> Today's Session </Text>
              <Text style={{ marginTop: 5 }}> Level 1 </Text>
              {/* time icon beneath it */}
              <View>
                <Text style={{ marginTop: 5 }}>
                  <MaterialCommunityIcons
                    name="clock-time-nine-outline"
                    size={15}
                    color="black"
                  />
                  <Text> 23 minutes </Text>
                </Text>
              </View>
            </View>

            {/* Checkbox */}
            <View style={styles.checkbox}></View>
          </View>

          {/* Third card */}
          <View style={[styles.routineCard, cardShadowStyle]}>
            {/* icon */}
            <View style={styles.Icon}>
              <Entypo name="awareness-ribbon" size={23} color="black" />
            </View>

            {/* Text and Checkbox */}
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}> Awareness </Text>
              <Text style={{ marginTop: 5 }}> About Mental Health </Text>
              {/* time icon beneath it */}
              <View>
                <Text style={{ marginTop: 5 }}>
                  <MaterialCommunityIcons
                    name="clock-time-nine-outline"
                    size={15}
                    color="black"
                  />
                  <Text> 10 minutes </Text>
                </Text>
              </View>
            </View>

            {/* Checkbox */}
            <View style={styles.checkbox}></View>
          </View>
        </View>

        {/* Mood Check in text */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
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
    fontSize: 25,
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
    backgroundColor: "#fff",
    borderColor: "#fff",
    padding: 20,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 10,
    margin: 10,
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

  Icon: {
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: "#D3D3D3",
  },
});
