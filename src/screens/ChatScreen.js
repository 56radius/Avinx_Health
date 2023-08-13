import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const chatData = [
  { id: "1", text: "Hi there!", isSent: true },
  { id: "2", text: "Hello!", isSent: false },
  // Add more chat messages here
];

const ChatScreen = (navigation) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.isSent ? styles.sent : styles.received,
            ]}
          >
            {!item.isSent && (
              <Image
                source={require("../.././assets/icon.png")}
                style={styles.profileImage}
              />
            )}
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <Ionicons name="ios-chatbox-outline" size={24} color="black" />
        <TextInput style={styles.input} placeholder="Type a message..." />
        <Ionicons name="ios-send" size={24} color="blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  sent: {
    justifyContent: "flex-end",
  },
  received: {
    justifyContent: "flex-start",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageText: {
    fontSize: 16,
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    padding: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
});

export default ChatScreen;
