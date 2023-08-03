// SplashScreen.js
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Adjust the duration as per your preference
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim, zIndex: 1 }}>
        <Text style={styles.appName}> AVINX_HEALTH </Text>
        <Text style={styles.slogan}> Committed to the care ... </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white", // Set background color to match the background of HomeScreen
    zIndex: 1, // Set zIndex to ensure the SplashScreen appears on top of other components
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "black", // Adjust the color to make the text visible
    marginBottom: 10,
  },
  slogan: {
    fontSize: 20,
    color: "black", // Adjust the color to make the text visible
  },
});

export default SplashScreen;
