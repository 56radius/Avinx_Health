import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import axios from "axios";

const SelfDiagnoserScreen = () => {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const witAiAccessToken = "BCDVZDKLHBU4KEKYOVO6ASYVOUR2PDKC";

  const sendQueryToWitAi = async (query) => {
    try {
      const response = await axios.get("https://api.wit.ai/message", {
        params: {
          q: query,
        },
        headers: {
          Authorization: `Bearer ${witAiAccessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error sending query to Wit.ai:", error);
      return null;
    }
  };

  const handleDiagnose = async () => {
    const query = `I've been feeling ${symptoms} lately.`;
    const witAiResponse = await sendQueryToWitAi(query);

    if (witAiResponse) {
      const diagnosedIntent = witAiResponse.intents[0].name;
      setDiagnosis(diagnosedIntent);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>AVA Health Assistant</Text>
        <Text style={styles.subtitle}>
          I'm here to help diagnose your symptoms.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your symptoms"
          onChangeText={(text) => setSymptoms(text)}
        />
        <TouchableOpacity onPress={handleDiagnose} style={styles.button}>
          <Text style={styles.buttonText}>Diagnose</Text>
        </TouchableOpacity>
        {diagnosis !== "" && (
          <View style={styles.diagnosisContainer}>
            <Text style={styles.diagnosisText}>AVA's Diagnosis:</Text>
            <Text style={styles.diagnosisResult}>{diagnosis}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  form: {
    width: "80%",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#777",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  diagnosisContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginBottom: 20,
  },
  diagnosisText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  diagnosisResult: {
    fontSize: 16,
  },
});

export default SelfDiagnoserScreen;
