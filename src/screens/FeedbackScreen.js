import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//firebase authentication

//expo vector icon
import { AntDesign } from "@expo/vector-icons";

export default function FeedbackScreen({ navigation }) {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={{ color: "green", fontWeight: "bold", fontSize: 19 }}>
            Give Feedback
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Text input for email address */}
          <View
            style={{
              borderWidth: 2,
              borderRadius: 8,
              width: "60%",
            }}
          >
            <TextInput
              style={{
                paddingHorizontal: 10,
              }}
              placeholder="Enter your Email address"
            />
          </View>

          {/* Rating Experience */}
          <View style={styles.ratingContainer}>
            <Text>Rate Your Experience:</Text>
            <View style={styles.emojiContainer}>
              <TouchableOpacity
                onPress={() => handleRatingSelect("😡")}
                style={[
                  styles.emoji,
                  selectedRating === "😡" && styles.selectedEmoji,
                ]}
              >
                <Text style={{ fontSize: 24 }}>😡</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleRatingSelect("😕")}
                style={[
                  styles.emoji,
                  selectedRating === "😕" && styles.selectedEmoji,
                ]}
              >
                <Text style={{ fontSize: 24 }}>😕</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleRatingSelect("😐")}
                style={[
                  styles.emoji,
                  selectedRating === "😐" && styles.selectedEmoji,
                ]}
              >
                <Text style={{ fontSize: 24 }}>😐</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleRatingSelect("😄")}
                style={[
                  styles.emoji,
                  selectedRating === "😄" && styles.selectedEmoji,
                ]}
              >
                <Text style={{ fontSize: 24 }}>😄</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleRatingSelect("😍")}
                style={[
                  styles.emoji,
                  selectedRating === "😍" && styles.selectedEmoji,
                ]}
              >
                <Text style={{ fontSize: 24 }}>😍</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Text input for comment */}
          <View
            style={{
              borderWidth: 2,
              borderRadius: 8,
              width: "60%",
              height: 80,
            }}
          >
            <TextInput
              style={{ paddingHorizontal: 10 }}
              placeholder="Say something here..."
              multiline
            />
          </View>

          {/* TouchableOpacity for the submit button */}
          <View
            style={{
              width: "40%",
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderColor: "green",
                backgroundColor: "green",
                borderRadius: 5,
                paddingVertical: 8,
                paddingHorizontal: 8,
              }}
            >
              <Text style={{ fontWeight: "bold" }}> Publish Feedback </Text>
            </TouchableOpacity>
          </View>

          {/* copyright */}
          <View>
            <Text> @AvinxNation . All rights reserved </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "Center",
    alignItems: "center",
  },

  header: {
    flex: 1,
    alignSelf: "flex-start",
    paddingHorizontal: 30,
  },

  form: {
    padding: 20,
  },
});
