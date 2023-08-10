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

//Fire base auth
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import app from "../backend/firebase.config";

const dbRef = getFirestore(app);
export default function TrackerScreen({ navigation }) {
  const [dataSnapshot, setDataSnapshot] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (docId) => {
    await deleteDoc(doc(collection(dbRef, "complains"), docId));
  };

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

              <TouchableOpacity
                onPress={() => handleDelete(doc.id)} // Pass the document ID
                style={{
                  width: "40%",
                  paddingVertical: 8,
                  paddingHorizontal: 10,
                  borderWidth: 2,
                  borderRadius: 10,
                  backgroundColor: "grey",
                  borderColor: "grey",
                }}
              >
                <Text style={{ color: "#fff" }}> Delete </Text>
              </TouchableOpacity>
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

  normalText: {
    fontSize: 30,
    color: "green",
  },

  highlightedText: {
    fontSize: 30,
    color: "blue",
  },
});
