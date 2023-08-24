import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

//expo vector icons
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

//navigation
import { useNavigation } from "@react-navigation/native";

//importing screens
import ChatScreen from ".././screens/ChatScreen";
import SelfDiagnoserScreen from "../screens/SelfDiagnoserScreen";

export default function ToolsScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 28 }}> Tools </Text>
        </View>

        {/* Top Row of Cards */}
        <View style={styles.cardRow}>
          {/* First Card */}
          <View
            style={{
              width: "48%",
              height: 150,
              backgroundColor: "blue",
              borderRadius: 24,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                paddingHorizontal: 16,
                flex: 0.5,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 2,
                  paddingVertical: 10,
                  paddingHorizontal: 8,
                  borderRadius: 50,
                  backgroundColor: "#fff",
                }}
              >
                <Feather name="book-open" size={20} color="green" />
              </TouchableOpacity>
            </View>
            {/* Add content for the second card */}
            <Text
              style={{
                alignSelf: "flex-start",
                fontWeight: "bold",
                fontSize: 15,
                paddingHorizontal: 16,
                color: "#fff",
              }}
            >
              Mood Journal
            </Text>
            {/* Add any other components or text for the card */}
          </View>

          {/* Second Card */}
          {/* Self Diagnoser */}
          <View
            style={{
              width: "48%",
              height: 150,
              backgroundColor: "#E0E0E0",
              borderRadius: 24,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                paddingHorizontal: 16,
                flex: 0.5,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("SelfDiagnoser")}
                style={{
                  borderWidth: 2,
                  paddingVertical: 10,
                  paddingHorizontal: 8,
                  borderRadius: 50,
                  backgroundColor: "#fff",
                }}
              >
                <FontAwesome5 name="diagnoses" size={20} color="black" />
              </TouchableOpacity>
            </View>
            {/* Add content for the second card */}
            <Text
              style={{
                alignSelf: "flex-start",
                fontWeight: "bold",
                fontSize: 15,
                paddingHorizontal: 16,
              }}
            >
              Self Diagnoser
            </Text>
            {/* Add any other components or text for the card */}
          </View>
        </View>

        {/* Bottom Row of Cards */}
        <View style={styles.cardRow}>
          {/* Third Card */}
          <View style={styles.card}>
            {/* Add content for the third card */}
            <Text style={styles.cardTitle}> Mindful Minutes </Text>
            {/* Add any other components or text for the card */}
          </View>

          {/* Fourth Card */}
          <View
            style={{
              width: "48%",
              height: 150,
              backgroundColor: "green",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ alignSelf: "flex-start", paddingHorizontal: 18 }}>
              {/* Icons */}
              <TouchableOpacity
                onPress={() => navigation.navigate("ChatScreen")}
                style={{
                  borderWidth: 2,
                  paddingVertical: 8,
                  paddingHorizontal: 5,
                  borderRadius: 19,
                  backgroundColor: "#E0E0E0",
                  borderColor: "#E0E0E0",
                }}
              >
                <Entypo name="mic" size={24} color="blue" />
              </TouchableOpacity>
            </View>
            {/* Add content for the fourth card */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                paddingVertical: 15,
                left: -18,
                color: "#fff",
              }}
            >
              Talk to AVA
            </Text>
            {/* Add any other components or text for the card */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },

  header: {
    alignSelf: "flex-start",
    paddingHorizontal: 1,
    marginTop: 70,
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },

  card: {
    width: "48%",
    height: 150,
    backgroundColor: "#E0E0E0",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  //first row styling

  //second row styling
});
