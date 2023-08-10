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
import TrackerHomeScreen from "../components/TrackerHomeScreen";
import ChatHomeScreen from "../components/ChatHomeScreen";
import CreateComplainScreen from "./CreateComplain";
import TrackerScreen from "./TrackerScreen";

const Tab = createBottomTabNavigator();

/* Home Screen */
function HomeScreen({ navigation }) {
  return <DashboardHomeScreen />;
}

/* Card Screen */
function PlusScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Card screen</Text>
    </View>
  );
}

/* Chat Screen */
function ChatsScreen() {
  return <ChatHomeScreen />;
}

/* Profile Screen */
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Hello Welcome To Setting screen </Text>
    </View>
  );
}

function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
        name="Chats"
        component={ChatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
          ),
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
