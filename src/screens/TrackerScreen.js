import React, { useEffect, useState } from "react";
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
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../backend/firebase.config";

const dbRef = getFirestore(app);
export default function TrackerScreen({ navigation }) {
  const [dataSnapshot, setDataSnapshot] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getComplains() {
      setLoading(true);
      try {
        let complains = [];
        const querySnapshot = await getDocs(collection(dbRef, "complains"));
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const result = {
            id: doc.id,
            ...data,
          };
          complains.push(result);
        });
        console.log("Document data:", complains);
        setDataSnapshot(complains);
        setLoading(false);
      } catch (error) {
        console.log("erro ", error);
        setError(error);
        setLoading(false);
      }
    }

    getComplains();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <Text style={{ color: "green", fontSize: 30, paddingVertical: 18 }}>
          <Text style={styles.normalText}>Avinx_</Text>
          <Text style={styles.highlightedText}>Health</Text>
        </Text>
      </View>

      {loading && <Text> Loading...</Text>}

      {!!dataSnapshot &&
        dataSnapshot.map((doc) => {
          return (
            <View key={doc.id}>
              <Text> {doc.id} </Text>
              <Text> {doc.title} </Text>
              <Text> {doc.message} </Text>
            </View>
          );
        })}
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
