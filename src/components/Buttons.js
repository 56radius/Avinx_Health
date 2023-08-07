import React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreenButton({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.Login}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "green",
            width: "100%",
            alignItems: "center",
            paddingVertical: 9,
            paddingHorizontal: 9,
            borderRadius: 5,
            backgroundColor: "green",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}> Login </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Signup}>
        <TouchableOpacity
          style={{
            borderColor: "#fff",
            borderRadius: 5,
            paddingVertical: 9,
            paddingHorizontal: 24,
            width: "100%",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "green",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Login: { flex: 0.5, justifyContent: "center", alignItems: "center" },

  Signup: {
    justifyContent: "center",
    alignItems: "center",
    r,
  },
});
