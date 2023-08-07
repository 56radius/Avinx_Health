import React from "react";
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

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={{ color: "green", fontSize: 30, paddingVertical: 18 }}>
          <Text style={styles.normalText}>Avinx_</Text>
          <Text style={styles.highlightedText}>Health</Text>
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Email input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="password"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Submit */}
        <View style={styles.Submit}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "green",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: "green",
            }}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}> LOGIN </Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password and Sign Up */}
        <View style={styles.rowContainer}>
          <Text>Forgot password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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

  form: {
    padding: 20,
    width: "85%",
  },

  Submit: {
    padding: 10,
  },

  rowContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },

  signUpButton: {
    paddingVertical: 2,
    color: "blue",
    fontSize: 16,
  },

  inputContainer: {
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  input: {
    fontSize: 16,
  },

  normalText: {
    fontSize: 30,
    color: "green",
  },

  highlightedText: {
    fontSize: 30,
    color: "blue",
  },
});
