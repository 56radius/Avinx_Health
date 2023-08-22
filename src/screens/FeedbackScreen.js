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
          <View>
            <TextInput />
          </View>

          {/* Text input for comment */}
          <View>
            <TextInput />
          </View>

          {/* TouchableOpacity for the submit button */}
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
});
