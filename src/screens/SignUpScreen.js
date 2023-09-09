import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from "react-native";
import PhoneInput from "react-native-phone-input";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authConfig, app } from "../backend/firebase.config";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import Modal from "react-native-modal";

import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const dbRef = getFirestore(app);

export default function SignUpScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [password, setPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      setBirthDate(selectedDate);
    }
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(authConfig, email, password)
      .then(async (result) => {
        const userData = {
          fullName,
          username,
          email,
          birthDate,
          gender: selectedGender,
          phoneNumber,
        };

        // Upload user data to Firestore
        try {
          const docRef = await addDoc(collection(dbRef, "users"), userData);
          console.log("User data uploaded with ID: ", docRef.id);
        } catch (error) {
          console.error("Error uploading user data: ", error);
        }

        console.log("User created", result.user);
        Alert.alert("Success", "Sign up successful");
      })
      .catch((err) => {
        console.error("Error ", err.message);
        Alert.alert("Failure", "Sign up failed");
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              fontSize: 28,
            }}
          >
            <Text style={styles.normalText}>Avinx_</Text>
            <Text style={styles.highlightedText}>Health</Text>
          </Text>

          <View style={{ paddingVertical: 10 }}>
            <Text style={{ color: "#708090" }}>
              Please enter your qualification details
            </Text>
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setFullName(text)}
              style={styles.input}
              placeholder="Full Name"
              keyboardType="default"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setUsername(text)}
              style={styles.input}
              placeholder="Username"
              keyboardType="default"
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="Email address"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => setShowDatePicker(true)}
          >
            <TextInput
              style={styles.input}
              placeholder="Select Birth Date"
              value={birthDate.toDateString()}
              editable={false}
            />
          </TouchableOpacity>

          {selectedGender ? (
            <View style={styles.inputContainer}>
              <Text style={{ fontSize: 16 }}>Gender: {selectedGender}</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.inputContainer}
            >
              <Text style={{ fontSize: 16 }}>Gender</Text>
            </TouchableOpacity>
          )}

          <View style={styles.inputContainer}>
            <PhoneInput
              ref={(ref) => {
                this.phone = ref;
              }}
              textStyle={styles.input}
              initialCountry="NG"
              value={phoneNumber}
              onChangePhoneNumber={(number) => setPhoneNumber(number)}
              cancelText="Cancel"
              confirmText="Confirm"
              textProps={{ placeholder: "Phone Number" }}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              secureTextEntry
              placeholder="Password"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.Submit}>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                borderWidth: 2,
                borderColor: "green",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
                borderRadius: 20,
                backgroundColor: "green",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff" }}>SUBMIT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <Text> Already Have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "blue", fontSize: 15, paddingVertical: 5 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#708090" }}> OR </Text>
          </View>

          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => console.log("Facebook login pressed")}
              style={styles.iconButton}
            >
              <FontAwesome name="facebook-square" size={30} color="#3b5998" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Gmail login pressed")}
              style={styles.iconButton}
            >
              <AntDesign name="google" size={30} color="#DB4437" />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Microsoft login pressed")}
              style={styles.iconButton}
            >
              <MaterialCommunityIcons
                name="microsoft"
                size={30}
                color="#2672EC"
              />
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>

      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={handleDateChange}
        onCancel={() => setShowDatePicker(false)}
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
            Select Gender
          </Text>
          <TouchableOpacity
            onPress={() => {
              setSelectedGender("Male");
              toggleModal();
            }}
            style={styles.genderOption}
          >
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelectedGender("Female");
              toggleModal();
            }}
            style={styles.genderOption}
          >
            <Text>Female</Text>
          </TouchableOpacity>
          <Button title="Cancel" onPress={toggleModal} />
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 30,
    paddingVertical: 90,
  },
  normalText: {
    fontSize: 30,
    color: "green",
    fontWeight: "bold",
  },

  highlightedText: {
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
  },

  form: {
    padding: 20,
    width: "110%",
  },

  inputContainer: {
    paddingVertical: 12,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: "blue",
  },
  input: {
    fontSize: 16,
  },

  rowContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 13,
  },

  iconButton: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },

  modalContainer: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },

  genderOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  Submit: {
    marginTop: 15,
  },
});
