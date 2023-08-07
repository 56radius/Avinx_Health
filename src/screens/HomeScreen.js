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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
