import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//expo vector icons
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function StandaloneCards() {
  return (
    <View>
      {/* First standalone card */}
      <View style={styles.StandaloneCards}>
        <View style={{ alignItems: "center" }}>
          {/* Icons */}
          <SimpleLineIcons
            style={{
              paddingVertical: 14,
              paddingHorizontal: 15,
              borderColor: "gray",
              marginBottom: 20,
              borderWidth: 2,
              borderRadius: 50,
            }}
            name="share-alt"
            size={70}
            color="blue"
          />
        </View>

        {/* Text Icons */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Health Sharing
          </Text>
          <Text style={{ color: "#fff" }}>
            Your devices can help you get better sleep and understand your sleep
            patterns
          </Text>
        </View>

        {/* Get Started button*/}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 2,
              width: "80%",
              alignItems: "center",
              paddingVertical: 9,
              backgroundColor: "green",
              borderColor: "green",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Share With Someone
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Standalone cards 2 */}
      <View style={styles.StandaloneCards}>
        <View style={{ alignItems: "center" }}>
          {/* Icons */}
          <SimpleLineIcons
            style={{
              paddingVertical: 14,
              paddingHorizontal: 15,
              borderColor: "gray",
              marginBottom: 20,
              borderWidth: 2,
              borderRadius: 50,
            }}
            name="share-alt"
            size={70}
            color="blue"
          />
        </View>

        {/* Text Icons */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Health Sharing
          </Text>
          <Text style={{ color: "#fff" }}>
            Your devices can help you get better sleep and understand your sleep
            patterns
          </Text>
        </View>

        {/* Get Started button*/}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 2,
              width: "80%",
              alignItems: "center",
              paddingVertical: 9,
              backgroundColor: "green",
              borderColor: "green",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Share With Someone
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  StandaloneCards: {
    justifyContent: "center",
    borderWidth: 2,
    width: "89%",
    height: 280,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: "#3b444b",
    borderColor: "#3b444b",
    padding: 20,
  },
});
