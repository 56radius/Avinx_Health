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
import HomeScreenButton from "../components/Buttons";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../.././assets/waters.avif")}
    >
      <View style={styles.container}>
        {/* spaning Text */}
        <View style={styles.AvinxText}>
          <Text style={{ fontSize: 20 }}>
            <Text style={styles.normalText}>Avinx_</Text>
            <Text style={styles.highlightedText}>Health</Text>
          </Text>
        </View>

        {/* Logo 
      <View style={styles.Image}>
        <Image
          style={{
            position: "absolute",
            marginTop: -150,
            alignItems: "center",
            alignSelf: "center",
          }}
          source={require("../.././assets/logo.png")}
        />
      </View> */}

        {/* footer for the login and sign up */}
        <View style={styles.footer}>
          <View>
            <Text
              style={{
                paddingVertical: 5,
                fontSize: 30,
                color: "#708090",
              }}
            >
              Mental Health
              {"\n"}
            </Text>
            <Text style={{ marginTop: -30 }}>
              Spreading awareness of the lack of knowledge of mental health in
              our communities
            </Text>
          </View>

          <HomeScreenButton />
        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  AvinxText: { flex: 0.6, alignSelf: "left", margin: 8, left: 10 },

  footer: { flex: 0.3, margin: 8 },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  normalText: {
    fontSize: 20,
    color: "green",
  },

  highlightedText: {
    fontSize: 20,
    color: "blue",
  },

  Image: { position: "absolute" },
});
