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
    <ScrollView>
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
            <View style={{ paddingVertical: 7 }}>
              <Text> Full Name </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Full Name" style={styles.input} />
            </View>
          </View>

          {/* Username */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Username </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="@anulovessleep" style={styles.input} />
            </View>
          </View>

          {/* Email */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Email </Text>
            </View>
            <View
              style={{
                borderColor: "black",
                borderWidth: 2,
                borderRadius: 20,
                padding: 10,
              }}
            >
              <TextInput placeholder="Email address" style={styles.input} />
            </View>
          </View>

          {/* Birthdate */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Birthdate </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Birthdate" style={styles.input} />
            </View>
          </View>

          {/* Phone */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Phone </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Phone number" style={styles.input} />
            </View>
          </View>

          {/* Health status */}
          <View>
            <View style={{ paddingVertical: 7 }}>
              <Text> Health Status </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="status" style={styles.input} />
            </View>
          </View>
        </View>

        {/* Submit */}
        <View style={{ justifyContent: "center", width: "45%", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderRadius: 8,
              paddingVertical: 10,
              alignItems: "center",
              borderColor: "green",
            }}
          >
            <Text> Update </Text>
          </TouchableOpacity>
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
  },

  header: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingHorizontal: 30,
    marginTop: 70,
  },

  //form
  form: {
    padding: 20,
    width: "96%",
  },

  inputContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },

  input: {
    fontSize: 16,
  },
});
