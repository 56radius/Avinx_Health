import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";
import DashboardHomeScreen from "../components/DashboardHomeScreen";
import TrackerScreen from "./TrackerScreen";
import TasksScreen from "./TasksScreen";
import ToolsScreen from "../components/ToolsScreen";
import ProfileScreen from "../components/ProfileScreen";

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBarContainer,
        activeTintColor: "green", // Color for the active tab
        inactiveTintColor: "black", // Color for inactive tabs
      }}
    >
      <Tab.Screen
        name="Home"
        component={DashboardHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="sitemap" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Plus"
        component={TasksScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="plussquare" size={size + 20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Tools"
        component={ToolsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="inbox" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "white",
    borderTopWidth: 2,
    borderTopColor: "transparent",
    height: 80,
  },
});
