import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SplashScreen from "./src/components/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App(navigation) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time for your app (e.g., fetching data, initializing, etc.)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the loading duration as needed
  }, []);

  if (isLoading) {
    return <SplashScreen />; // Show the SplashScreen while loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* stack Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            title: "HOME/LOGIN",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

        {/* Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTransparent: true,
            title: "Login",
          }}
        />

        {/* Sign up */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
