import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.headerTitle}>
        <Text style={{ color: "green", fontSize: 30, paddingVertical: 18 }}>
          <Text style={styles.normalText}>Avinx_</Text>
          <Text style={styles.highlightedText}>Health</Text>
        </Text>

        {/* Paragraph */}
        <View style={{ paddingVertical: 5 }}>
          <Text style={{ fontSize: 15, textAlign: "center" }}>
            You Will receive the instructions for {"\n"}
            <Text style={{ textAlign: "center" }}>resetting your password</Text>
          </Text>
        </View>
      </View>

      {/* TextInput */}
      <View
        style={{
          width: "80%",
          height: 50,
          borderWidth: 2,
          marginTop: 60,
          justifyContent: "center",
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <TextInput placeholder="Email" />
      </View>

      {/* Submit */}
      <View
        style={{
          marginTop: 34,
          width: "50%",
        }}
      >
        <TouchableOpacity
          style={{
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 8,
            borderRadius: 10,
            borderColor: "green",
          }}
        >
          <Text style={{ fontWeight: "bold" }}> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    marginTop: 70,
  },

  normalText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
    textAlign: "center",
  },

  highlightedText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "blue",
    textAlign: "center",
  },
});
