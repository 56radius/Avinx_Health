import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//Expo Vector Icons
import {
  Ionicons,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";

export default function EditProfileScreen({ navigation }) {
  return (
    <ScrollView>
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
          {/* Full Name*/}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <EvilIcons name="user" size={24} color="black" />
              <Text style={styles.profileTitle}>
                Full Name {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  Anuoluwapo Sleep
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* User name */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <EvilIcons name="user" size={24} color="black" />
              <Text style={styles.profileTitle}>
                Username {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  @anulovessleep
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Email */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <MaterialCommunityIcons
                name="email-fast"
                size={24}
                color="black"
              />
              <Text style={styles.profileTitle}>
                Email {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  cussmeritmohammed@gmail.com
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Birthdate */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <FontAwesome name="birthday-cake" size={24} color="black" />
              <Text style={styles.profileTitle}>
                Birthdate {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>09/08/2002</Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Help and support */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <Ionicons name="ios-help-circle" size={24} color="black" />
              <Text style={styles.profileTitle}> Support </Text>
            </View>
          </TouchableOpacity>

          {/* Gender */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <Feather name="phone" size={24} color="black" />
              <Text style={styles.profileTitle}>
                phone{"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}>
                  +2348101295652
                </Text>
              </Text>
            </View>
          </TouchableOpacity>

          {/* Data Privacy */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <MaterialIcons name="privacy-tip" size={24} color="black" />
              <Text style={styles.profileTitle}> Privacy </Text>
            </View>
          </TouchableOpacity>

          {/* Health Status */}
          <TouchableOpacity style={styles.profileItem}>
            <View style={styles.profileItemLeft}>
              <FontAwesome5 name="hospital" size={24} color="black" />
              <Text style={styles.profileTitle}>
                Health Status {"\n"}
                <Text style={{ color: "gray", fontSize: 12 }}> None </Text>
              </Text>
            </View>
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
    flex: 1,
    marginTop: 90,
    margin: 30,
    alignSelf: "flex-start",
  },

  profileItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },

  profileItemLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 100,
  },

  profileTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 9,
  },
});
