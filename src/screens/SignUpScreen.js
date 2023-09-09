import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

// Firebase authentication
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authConfig } from "../backend/firebase.config";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import PhoneInput from "react-native-phone-input"; // Import the PhoneInput component

// Vector iCons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SignUpScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(""); // Added phone number state

  const handleSubmit = () => {
    console.log("Registering ", email, password, phoneNumber); // Updated to include phoneNumber
    createUserWithEmailAndPassword(authConfig, email, password)
      .then((result) => {
        console.log("user created", result.user);
        Alert.alert("Success", "Sign up successful");
      })
      .catch((err) => {
        console.log("Error ", err.message);
        Alert.alert("Failure", "Omo e no sign up o");
      });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Title Name */}
        <View style={styles.Header}>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              fontSize: 28,
            }}
          >
            <Text style={styles.normalText}>Avinx_</Text>
            <Text style={styles.highlightedText}>Health</Text>
          </Text>

          {/* paragraph */}
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ color: "#708090" }}>
              Please enter your qualification details
            </Text>
          </View>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Full Name input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              keyboardType="default"
              autoCapitalize="words"
            />
          </View>

          {/* Username */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType="default"
              autoCapitalize="words"
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="Email address"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Birthday Date */}
          <View>
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => setShowDatePicker(true)}
            >
              <TextInput
                style={styles.input}
                placeholder="Select Birth Date"
                value={birthDate.toDateString()}
                editable={false}
              />
            </TouchableOpacity>
          </View>

          {/* Phone Number input */}
          <View style={styles.inputContainer}>
            <PhoneInput
              ref={(ref) => {
                this.phone = ref;
              }}
              textStyle={styles.input}
              initialCountry="US"
              value={phoneNumber}
              onChangePhoneNumber={(number) => setPhoneNumber(number)}
              cancelText="Cancel"
              confirmText="Confirm"
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Submit */}
          <View style={styles.Submit}>
            <TouchableOpacity
              onPress={handleSubmit}
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
              <Text style={{ fontWeight: "bold", color: "#fff" }}>SUBMIT</Text>
            </TouchableOpacity>
          </View>

          {/* Forgot Password and Sign Up */}
          <View style={styles.rowContainer}>
            <Text> Already Have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "blue", fontSize: 15, paddingVertical: 5 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* OR text */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#708090" }}> OR </Text>
          </View>

          {/* Other Sign up options */}
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
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 30,
    paddingVertical: 90,
  },
  normalText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },

  highlightedText: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },

  form: {
    padding: 20,
    width: "100%",
  },

  inputContainer: {
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: "blue",
  },
  input: {
    fontSize: 16,
  },

  rowContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
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
