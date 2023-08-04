import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function SignUpScreen({ navigation }) {
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
          <View>
            <Text> Please enter your qualification details </Text>
          </View>
        </View>

        {/* Form */}
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
