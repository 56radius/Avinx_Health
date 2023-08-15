import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

//Expo Vector Icons
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";

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

      {/* user's info */}
      <View style={{ flex: 5 }}>
        {/* Edit Profile */}
        <TouchableOpacity
          onPress={() => navigation.navigate("MyProfileScreen")}
          style={styles.profileItem}
        >
          <View style={styles.profileItemLeft}>
            <AntDesign name="edit" size={24} color="black" />
            <Text style={styles.profileTitle}>
              Username {"\n"} <Text> @anulovessleep </Text>
            </Text>
          </View>
        </TouchableOpacity>

        {/* */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="people-outline" size={24} color="black" />
            <Text style={styles.profileTitle}> Status </Text>
          </View>
        </TouchableOpacity>

        {/* Search */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="search-outline" size={24} color="black" />
            <Text style={styles.profileTitle}> Search </Text>
          </View>
        </TouchableOpacity>

        {/* Help and support */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <Ionicons name="ios-help-circle" size={24} color="black" />
            <Text style={styles.profileTitle}> Support </Text>
          </View>
        </TouchableOpacity>

        {/* Feedback */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <MaterialIcons name="feedback" size={24} color="black" />
            <Text style={styles.profileTitle}> Feedback </Text>
          </View>
        </TouchableOpacity>

        {/* Data Privacy */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <MaterialIcons name="privacy-tip" size={24} color="black" />
            <Text style={styles.profileTitle}> Privacy </Text>
          </View>
        </TouchableOpacity>

        {/* Settings */}
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.profileItemLeft}>
            <AntDesign name="setting" size={24} color="black" />
            <Text style={styles.profileTitle}> Settings </Text>
          </View>
        </TouchableOpacity>
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

  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },

  profileItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 160,
  },

  profileTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
