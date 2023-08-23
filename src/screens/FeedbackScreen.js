import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function FeedbackScreen({ navigation }) {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.headerText}>Give Feedback</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email address"
          />
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Rate Your Experience:</Text>
          <View style={styles.emojiContainer}>
            {["😡", "😕", "😐", "😄", "😍"].map((emoji) => (
              <TouchableOpacity
                key={emoji}
                onPress={() => handleRatingSelect(emoji)}
                style={[
                  styles.emoji,
                  selectedRating === emoji && styles.selectedEmoji,
                ]}
              >
                <Text style={styles.emojiText}>{emoji}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.commentInput]}
            placeholder="Say something here..."
            multiline
          />
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Publish Feedback</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          @AvinxNation. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "80%",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 18,
    marginBottom: 10,
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  emoji: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  selectedEmoji: {
    borderColor: "green",
    backgroundColor: "green",
  },
  emojiText: {
    fontSize: 24,
  },
  commentInput: {
    height: 80,
  },
  submitButton: {
    backgroundColor: "green",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    color: "#aaa",
  },
});
