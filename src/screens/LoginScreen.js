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
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authConfig } from "../backend/firebase.config";
import DashboardScreen from "./DashboardScreen";

// Vector iCons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(authConfig, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Logging user ", user.uid);
        // Show success alert
        Alert.alert("Success", "Login successful!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Logging err ", error);
        // Show error alert
        Alert.alert("Error", errorMessage);
      });
  };

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
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => setPassword(text)}
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
            onPress={handleLogin}
            style={{
              borderWidth: 2,
              borderColor: "green",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 10,
              borderRadius: 20,
              backgroundColor: "green",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}> LOGIN </Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password and Sign Up */}
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* OR text */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#708090" }}> OR </Text>
        </View>

        {/* Icons to login with */}
        <View style={styles.iconContainer}>
          {/* Facebook */}
          <TouchableOpacity
            onPress={() => console.log("Facebook login pressed")}
            style={styles.iconButton}
          >
            <FontAwesome name="facebook-square" size={30} color="#3b5998" />
          </TouchableOpacity>

          {/* Gmail */}
          <TouchableOpacity
            onPress={() => console.log("Gmail login pressed")}
            style={styles.iconButton}
          >
            <AntDesign name="google" size={30} color="#DB4437" />
          </TouchableOpacity>

          {/* Microsoft */}
          <TouchableOpacity
            onPress={() => console.log("Microsoft login pressed")}
            style={styles.iconButton}
          >
            <MaterialCommunityIcons
              name="microsoft"
              size={30}
              color="#2672EC"
            />
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
    paddingVertical: 20,
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

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 13,
  },

  iconButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
});
