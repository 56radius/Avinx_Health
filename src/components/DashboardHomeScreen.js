import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
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
            borderRadius: 2,
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
        <View style={{ marginLeft: 190 }}>
          <Image
            style={{ width: 10, height: 10 }}
            source={require("../.././assets/logo.png")}
          />
        </View>
        <TouchableHighlight onPress={handleSignOut}>
          <Text>SIGN OUT</Text>
        </TouchableHighlight>
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
    borderWidth: 2,
    width: "89%",
    height: 130,
    marginTop: 40,
    borderRadius: 12,
    backgroundColor: "blue",
    borderColor: "blue",
    padding: 20,
  },
});
