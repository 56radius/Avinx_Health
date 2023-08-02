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

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Text */}
      <View style={styles.AvinxText}>
        <Text style={{ fontSize: 20 }}> Avinx_Health </Text>
      </View>

      {/* Logo */}

      {/* footer for the login and sign up */}
      <View style={styles.footer}>
        <View>
          <Text style={{ paddingVertical: 10 }}>
            Mental Health
            {"\n"}
            <Text>
              Spreading awareness of the lack of knowledge of mental health in
              our communities
            </Text>
          </Text>
        </View>

        {/* Login ad sign up buttons */}
      </View>
      {/*
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styles.imageBackground}
  ></ImageBackground> */}
      <StatusBar style="auto" />
    </View>
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
});
