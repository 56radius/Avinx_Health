import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 30 }}
          source={require("../.././assets/clover.jpg")}
        />

        <View
          style={{
            width: "40%",
            margin: 12,
          }}
        >
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 13,
              borderColor: "green",
              paddingHorizontal: 3.5,
            }}
          >
            <Text> Change Profile Picture </Text>
          </TouchableOpacity>
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
    paddingVertical: 20,
  },
});
