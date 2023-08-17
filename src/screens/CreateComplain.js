import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";

// Vector iCons
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//firebase authentication
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../backend/firebase.config";

const dbRef = getFirestore(app);
export default function CreateComplainScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendComplain = async () => {
    const data = {
      title: title,
      message: message,
    };
    setLoading(true);
    try {
      const result = await addDoc(collection(dbRef, "complains"), data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={{ color: "green", fontSize: 30, paddingVertical: 18 }}>
          <Text style={styles.normalText}>Avinx_</Text>
          <Text style={styles.highlightedText}>Health</Text>
        </Text>
      </View>

      {error && <Text> {error} </Text>}

      {/* Form */}
      <View style={styles.form}>
        {/* Email input */}
        <View style={styles.inputContainer}>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
            placeholder="Enter your title"
            autoCapitalize="none"
          />
        </View>

        {/* complaint text description */}
        <View style={styles.inputContainer}>
          <TextInput
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={styles.input}
            placeholder="Add a message"
          />
        </View>

        {/* Submit */}
        <View style={styles.Submit}>
          <TouchableOpacity
            onPress={sendComplain}
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
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              {loading ? "Loading..." : "Send Complain"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Forgot Password and Sign Up */}
        <View style={styles.rowContainer}>
          <Text>Forgot password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpButton}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* OR text */}
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#708090" }}> OR </Text>
        </View>

        {/* Icons to login with */}
        <View style={styles.iconContainer}>
          {/* Facebook */}
          <TouchableOpacity
            onPress={() => console.log("Facebook login pressed")}
            style={styles.iconButton}
          >
            <FontAwesome name="facebook-square" size={30} color="#3b5998" />
          </TouchableOpacity>

          {/* Gmail */}
          <TouchableOpacity
            onPress={() => console.log("Gmail login pressed")}
            style={styles.iconButton}
          >
            <AntDesign name="google" size={30} color="#DB4437" />
          </TouchableOpacity>

          {/* Microsoft */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    padding: 20,
    width: "85%",
  },

  Submit: {
    padding: 10,
  },

  rowContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },

  signUpButton: {
    paddingVertical: 2,
    color: "blue",
    fontSize: 16,
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

  normalText: {
    fontSize: 30,
    color: "green",
  },

  highlightedText: {
    fontSize: 30,
    color: "blue",
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
});
