import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={{ width: 70, height: 70, borderRadius: 50 }}
          source={require("../.././assets/clover.jpg")}
        />

        <View
          style={{
            width: "50%",
            margin: 12,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 13,
              borderColor: "green",
              alignItems: "center",
            }}
          >
            <Text> Change Profile Picture </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* Full Name */}
        <View>
          <Text> Full Name </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Full Name" style={styles.input} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingHorizontal: 30,
  },

  //form
  form: {
    padding: 20,
    width: "96%",
  },

  inputContainer: {
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  input: {
    fontSize: 16,
  },
});
