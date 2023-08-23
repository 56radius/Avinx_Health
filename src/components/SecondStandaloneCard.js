import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

//bottom sheets
import RBSheet from "react-native-raw-bottom-sheet";

//expo vector icons
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Octicons,
} from "@expo/vector-icons";

export default function SecondStandaloneCards() {
  // Create a ref for the bottom sheet
  const bottomSheetRef = React.useRef();

  // Function to open the bottom sheet
  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };
  return (
    <View>
      {/* First standalone card */}
      <View style={styles.StandaloneCards}>
        <View style={{ alignItems: "center" }}>
          {/* Icons */}
          <SimpleLineIcons
            style={{
              paddingVertical: 14,
              paddingHorizontal: 15,
              borderColor: "gray",
              marginBottom: 13,
              borderWidth: 2,
              borderRadius: 50,
            }}
            name="share-alt"
            size={70}
            color="blue"
          />
        </View>

        {/* Text Icons */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Health Sharing
          </Text>
          <Text style={{ color: "#fff" }}>
            You can share your health status with family, friends, doctors or
            therapist to monitor your health status.
          </Text>
        </View>

        {/* Get Started button*/}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <TouchableOpacity
            onPress={openBottomSheet}
            style={{
              borderWidth: 2,
              width: "80%",
              alignItems: "center",
              paddingVertical: 9,
              backgroundColor: "green",
              borderColor: "green",
              borderRadius: 10,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Share With Someone
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet for the first standalone card */}
      <ScrollView>
        <RBSheet
          ref={bottomSheetRef}
          height={550}
          // Customize the styles for the bottom sheet
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}
        >
          {/* Content for the bottom sheet */}
          <View style={{ padding: 20 }}>
            <View style={styles.bottomSheetHeader}>
              <Text> Share With </Text>
              <TouchableOpacity onPress={() => bottomSheetRef.current.close()}>
                <Text style={{ color: "blue" }}> Cancel </Text>
              </TouchableOpacity>
            </View>

            {/* Search input */}
            <View style={styles.searchInputContainer}>
              {/* Search input icon */}
              <Octicons
                style={styles.searchIcon}
                name="search"
                size={24}
                color="black"
              />
              <TextInput
                placeholder="Search"
                style={styles.searchInput}
                placeholderTextColor="gray"
              />
            </View>
            {/* ... (Other content) */}
          </View>
        </RBSheet>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  StandaloneCards: {
    justifyContent: "center",
    borderWidth: 2,
    width: "89%",
    height: 280,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: "#3b444b",
    borderColor: "#3b444b",
    padding: 20,
  },

  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  searchInputContainer: {
    borderWidth: 2,
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  //search icon
  searchIcon: {
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: "black",
  },
});
