import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Zocial,
  Ionicons,
  Feather,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import {
  Image,
  Settings,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import DashboardHomeScreen from "../components/DashboardHomeScreen";
import TrackerScreen from "./TrackerScreen";
import CreateComplainScreen from "./CreateComplain";
import ToolsScreen from "../components/ToolsScreen";
import ProfileScreen from "../components/ProfileScreen";

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashboardHomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="ios-home-outline" size={24} color="green" />
          ),
        }}
      />
      <Tab.Screen
        name="Tracker"
        component={TrackerScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome5 name="sitemap" size={24} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="Plus"
        component={CreateComplainScreen}
        options={{
          tabBarLabel: () => false,
          tabBarIcon: () => (
            <AntDesign name="plussquare" size={50} color="green" />
          ),
          tabBarIconStyle: {
            marginTop: -40, // Adjust this value as needed
          },
        }}
      />

      <Tab.Screen
        name="Tools"
        component={ToolsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="inbox" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard;

const styles = StyleSheet.create({});
