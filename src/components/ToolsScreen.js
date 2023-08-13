import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ChatScreen from ".././screens/ChatScreen";

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
                <Feather name="book-open" size={24} color="green" />
              </TouchableOpacity>
            </View>
            {/* Add content for the first card */}
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
                paddingVertical: 15,
                left: -8,
                color: "#fff",
              }}
            >
              Mood Journal
            </Text>
            {/* Add any other components or text for the card */}
          </View>

          {/* Second Card */}
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
            {/* Add content for the second card */}
            <Text style={styles.cardTitle}> Self Diagnoser </Text>
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
});
