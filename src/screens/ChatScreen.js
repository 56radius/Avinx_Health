import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install the package

const ChatScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  const therapistResponse = (userMessage) => {
    const messageText = userMessage.toLowerCase();

    if (messageText.includes("hello")) {
      return "Hello there! How can I assist you today?";
    } else if (messageText.includes("how are you")) {
      return "I'm fine, but I'm here to help!";
    } else if (messageText.includes("thank you")) {
      return "You're welcome! Feel free to ask anything.";
    } else {
      return "I'm here to listen. Please feel free to share.";
    }
  };

  const handleUserMessage = (newMessages = []) => {
    const userMessage = newMessages[0];
    const therapistReply = therapistResponse(userMessage.text);

    setMessages([
      {
        _id: Math.round(Math.random() * 1000000),
        text: therapistReply,
        createdAt: new Date(),
        user: { _id: 2, name: "AVA" },
      },
      {
        _id: Math.round(Math.random() * 1000000),
        text: userMessage.text,
        createdAt: new Date(),
        user: { _id: 1, name: "User" },
      },
      ...messages,
    ]);
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#3772FF", // User's message background color
          },
          left: {
            backgroundColor: "#E5E5E5", // Bot's message background color
          },
        }}
        textStyle={{
          right: {
            color: "white", // User's message text color
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendButtonContainer}>
          <Ionicons name="send" size={28} color="#3772FF" />
        </View>
      </Send>
    );
  };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={handleUserMessage}
        user={{ _id: 1 }}
        renderBubble={renderBubble}
        renderSend={renderSend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7", // Chat screen background color
  },
  sendButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});

export default ChatScreen;
