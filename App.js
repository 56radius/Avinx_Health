import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importing necessary screens and components
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Hello from "./src/screens/Hello";
import SignUpScreen from "./src/screens/SignUpScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import SplashScreen from "./src/components/SplashScreen";
import ChatScreen from "./src/screens/ChatScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

//firebase authentication
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Stack = createNativeStackNavigator();
const auth = getAuth();

//function app
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currUser, setCurrUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("Loggedin user status ", user);
      setCurrUser(user);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* stack Home Screen */}

        {currUser ? (
          <>
            {/* Dashboard */}
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{ title: "Dashboard", headerShown: false }}
            />

            {/* Chat Screen */}
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ title: "AVA" }}
            />
          </>
        ) : (
          <>
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
                headerShown: false,
                title: "Login",
              }}
            />

            {/* ForgotPassword */}
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{
                headerTransparent: true,
                title: "Forgot Password",
              }}
            />

            {/* Sign up */}
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: "Sign Up", headerShown: false }}
            />
          </>
        )}
        {/* <Stack.Screen
          name="Hello"
          component={Hello}
          options={{
            headerTransparent: true,
            title: "Login",
          }}
        /> */}

        {/* Dashboard */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
