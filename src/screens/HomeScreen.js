import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";

// Vector Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
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
      </View>

      {/* Icon or images in the middle */}
      <View style={styles.ImageContainer}>
        <Image
          style={{ height: 200, width: 250 }}
          source={require("../.././assets/cathead.png")}
        />

        {/* Header and paragraph */}
        <View
          style={{
            paddingVertical: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 33, textAlign: "center" }}
          >
            Your assistant In{"\n"}
            <Text style={{ textAlign: "center" }}> Mental Health </Text>
          </Text>

          {/* Paragraph */}
          <View style={{ paddingVertical: 13 }}>
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              Take care of you health{"\n"}
              <Text style={{ textAlign: "center" }}>
                together with professionals
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Button */}
      <View style={{ width: "95%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            borderWidth: 2,
            borderRadius: 9,
            borderColor: "green",
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    justifyContent: "center",
    alignItems: "center",
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

  ImageContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
