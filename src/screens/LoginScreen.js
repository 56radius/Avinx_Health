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
          AVINX_HEALTH
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
              justifyContent: "center",
            }}
          >
            <Text> Login </Text>
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
});
