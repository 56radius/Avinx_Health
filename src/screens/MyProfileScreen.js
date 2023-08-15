import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={{
            width: 78,
            height: 78,
            borderRadius: 50,
          }}
          source={require("../.././assets/clover.jpg")}
        />
        <Text
          style={{
            paddingVertical: 20,
            paddingHorizontal: 10,
            fontWeight: "bold",
          }}
        >
          Anuoluwapo Sleep {"\n"}
          <Text style={{ color: "gray" }}> @anulovessleep </Text>
        </Text>
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
    flex: 1,
    marginTop: 90,
    margin: 30,
    alignSelf: "flex-start",
  },
});
