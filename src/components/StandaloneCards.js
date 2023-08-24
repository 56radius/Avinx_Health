import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Octicons, SimpleLineIcons } from "@expo/vector-icons";

export default function StandaloneCards() {
  const bottomSheetRef = useRef();

  const openBottomSheet = () => {
    bottomSheetRef.current.open();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.standaloneCard}>
        <View style={styles.iconContainer}>
          <SimpleLineIcons
            style={styles.icon}
            name="share-alt"
            size={70}
            color="blue"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Health Sharing</Text>
          <Text style={styles.description}>
            Share your health status with family, friends, doctors, or
            therapists to monitor your health.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={openBottomSheet} style={styles.button}>
            <Text style={styles.buttonText}>Share With Someone</Text>
          </TouchableOpacity>
        </View>
      </View>

      <RBSheet
        ref={bottomSheetRef}
        height={550}
        customStyles={styles.bottomSheet}
      >
        <View style={styles.bottomSheetContent}>
          <View style={styles.bottomSheetHeader}>
            <Text style={styles.bottomSheetHeaderText}>Share With</Text>
            <TouchableOpacity
              onPress={() => bottomSheetRef.current.close()}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchInputContainer}>
            <Octicons name="search" size={24} color="black" />
            <TextInput
              placeholder="Search"
              style={styles.searchInput}
              placeholderTextColor="gray"
            />
          </View>
        </View>
      </RBSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  standaloneCard: {
    width: "95%",
    height: 280,
    backgroundColor: "#3b444b",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 13,
  },
  icon: {
    padding: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "gray",
  },
  textContainer: {
    marginBottom: 30,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    color: "#fff",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 9,
    height: 35,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  //bottomSheet styling
  bottomSheet: {
    container: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
  },
  bottomSheetContent: {
    padding: 20,
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  bottomSheetHeaderText: {
    fontSize: 18,
  },
  cancelButton: {
    paddingHorizontal: 10,
  },
  cancelButtonText: {
    color: "blue",
  },
  searchInputContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    color: "black",
  },
});
