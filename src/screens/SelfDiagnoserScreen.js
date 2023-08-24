import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SelfDiagnoserScreen() {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const handleDiagnose = () => {
    // Perform basic logic for generating diagnosis based on symptoms (simplified for demonstration)
    // This logic would typically be more complex and accurate in a real application
    if (symptoms.toLowerCase().includes("fever")) {
      setDiagnosis(
        "You might have a fever. Please consult a medical professional."
      );
    } else if (symptoms.toLowerCase().includes("cough")) {
      setDiagnosis(
        "You might have a cough. Please consult a medical professional."
      );
    } else {
      setDiagnosis(
        "We couldn't determine the diagnosis. Please consult a medical professional."
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Self Diagnoser</Text>
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
            <Text style={styles.diagnosisText}>Diagnosis:</Text>
            <Text style={styles.diagnosisResult}>{diagnosis}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

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
    marginBottom: 20,
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
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  diagnosisContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: "100%",
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
