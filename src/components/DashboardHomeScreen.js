import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";

export default function DashboardHomeScreen({ navigation }) {
  const handleSignOut = () => {
    // Sign out of Firebase Auth
    const auth = getAuth();

    signOut(auth).then(() => navigation.navigate("Login"));
  };
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
            borderRadius: 8,
          }}
        >
          <Ionicons name="ios-notifications-outline" size={24} color="black" />
        </View>
      </View>

      {/* Card */}
      <View style={styles.cardHeader}>
        <View style={styles.textCardHeader}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              paddingVertical: 5,
              color: "#fff",
            }}
          >
            Keep it up!
          </Text>
          <Text style={{ fontSize: 12, color: "#fff" }}>
            You are never alone okay? {"\n"} Always remember that
          </Text>
        </View>
        <View style={{ position: "absolute", marginLeft: 210 }}>
          <Image
            style={{ width: 130, height: 110 }}
            source={require("../.././assets/logo.png")}
          />
        </View>
        <TouchableHighlight onPress={handleSignOut}>
          <Text>SIGN OUT</Text>
        </TouchableHighlight>
      </View>

      {/* line up cards */}
      <View style={styles.lineCardheader}>
        <View style={styles.lineCardInfo}>
          <Text style={styles.lineCardText}> A Better You </Text>
        </View>

        {/* see all */}
        <View sty>
          <TouchableOpacity>
            <Text style={{ color: "blue" }}> See all </Text>
          </TouchableOpacity>
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

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 17,
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

  // Card begining styling
  cardHeader: {
    justifyContent: "center",
    borderWidth: 2,
    width: "89%",
    height: 130,
    marginTop: 40,
    borderRadius: 12,
    backgroundColor: "blue",
    borderColor: "blue",
    padding: 20,
  },

  // Card headers
  lineCardheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  lineCardInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  lineCardText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
