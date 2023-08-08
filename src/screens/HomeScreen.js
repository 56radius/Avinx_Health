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
        <View style={{ paddingVertical: 20 }}>
          <View style={styles.SecondContainer}>
            <Text> Your assistance in Health Care </Text>
            <Text> Take care of your health together with professionals </Text>
          </View>
        </View>
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
