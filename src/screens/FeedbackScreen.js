import React from "react";
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

export default function FeedbackScreen({ navigation }) {
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
              }}
            >
              <Text> Publish Feedback </Text>
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
