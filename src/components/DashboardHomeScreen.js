import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { getAuth, signOut } from "firebase/auth";

export default function DashboardHomeScreen({ navigation }) {
  const handleSignOut = () => {
    // Sign out of Firebase Auth
    const auth = getAuth();

    signOut(auth).then(() => navigation.navigate("Login"));
  };

  // Sample card data
  const cardData = [
    { id: "1", title: "Feedback", content: "Content for Card 1" },
    { id: "2", title: "Mind Health Trends", content: "Content for Card 2" },
    { id: "3", title: "Community", content: "Content for Card 3" },
    { id: "4", title: "Card 4", content: "Jesus is good" },
  ];

  const renderItem = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
      {/* Add any other components you want for each card */}
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Header and greetings */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../.././assets/woman.jpg")}
            />
            <Text style={styles.greetingText}>
              Good Evening,
              {"\n"}
              <Text style={styles.userName}>Anu</Text>
            </Text>
          </View>

          {/* Notification Icons */}
          <View
            style={{
              borderWidth: 1,
              paddingHorizontal: 4,
              paddingVertical: 5,
              backgroundColor: "#D3D3D3",
              borderColor: "#D3D3D3",
              borderRadius: 8,
            }}
          >
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color="black"
            />
          </View>
        </View>

        {/* Card */}
        <View style={styles.cardHeader}>
          <View style={styles.textCardHeader}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                paddingVertical: 5,
                color: "#fff",
              }}
            >
              Keep it up!
            </Text>
            <Text style={{ fontSize: 12, color: "#fff" }}>
              You are never alone okay? {"\n"} Always remember that
            </Text>
          </View>
          <View style={{ position: "absolute", marginLeft: 210 }}>
            <Image
              style={{ width: 130, height: 110 }}
              source={require("../.././assets/logo.png")}
            />
          </View>
          <TouchableHighlight onPress={handleSignOut}>
            <Text>SIGN OUT</Text>
          </TouchableHighlight>
        </View>

        {/* line up cards */}
        <View style={styles.lineCardheader}>
          <View style={styles.lineCardInfo}>
            <Text style={styles.lineCardText}> A Better You </Text>
          </View>

          {/* see all */}
          <View>
            <TouchableOpacity>
              <Text style={{ color: "green" }}> See all </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Slideshow of Cards */}
        <View style={styles.slideshow}>
          <FlatList
            data={cardData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Your Routine, Text */}
        <View
          style={{
            alignSelf: "flex-start",
            paddingHorizontal: 26, // Adjust this value to your preference
            paddingVertical: 10,
          }}
        >
          <Text style={{}}>
            <Text style={{ color: "blue", fontSize: 19 }}> Your </Text>
            <Text style={{ color: "green", fontSize: 19 }}> Routine </Text>
          </Text>
        </View>

        {/* Routine Cards  components*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: 2,
            width: "89%",
            height: 100,
            marginTop: 8,
            borderRadius: 12,
            backgroundColor: "#E0E0E0",
            borderColor: "#E0E0E0",
            padding: 20,
          }}
        >
          {/* View element of image */}
          <View style={{ position: "absolute" }}>
            <Image
              style={{ width: 100, height: 78 }}
              source={require("../.././assets/water.png")}
            />
          </View>

          {/* Text style */}
          <View style={{ flex: 1, paddingHorizontal: 65, marginTop: 4 }}>
            <Text style={{ fontWeight: "bold" }}>
              Starting my day off right
            </Text>

            {/* Alarm design */}
            <View style={{ flex: 1, marginTop: 8, paddingHorizontal: 4 }}>
              <Ionicons name="alarm" size={18} color="green" />
              <View style={{ flex: 1, paddingHorizontal: 24, marginTop: -16 }}>
                <Text style={{ fontSize: 12 }}>12 min</Text>
              </View>
            </View>
          </View>

          {/* Right arrow */}
          <View>
            <TouchableOpacity>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
  },

  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 17,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  greetingText: {
    marginLeft: 10,
    fontSize: 15,
  },

  userName: {
    fontWeight: "bold",
  },

  // Card begining styling
  cardHeader: {
    justifyContent: "center",
    borderWidth: 2,
    width: "89%",
    height: 130,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: "blue",
    borderColor: "blue",
    padding: 20,
  },

  // Card headers
  lineCardheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 20,
  },

  lineCardInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  lineCardText: {
    marginLeft: 10,
    fontSize: 16,
  },

  // slideshow card
  slideshow: {
    width: "90%",
    height: 200,
    marginTop: 0,
    paddingHorizontal: 3,
  },

  card: {
    width: 150,
    height: "90%",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  chartContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
