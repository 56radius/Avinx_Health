import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SelfDiagnoserScreen() {
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const navigation = useNavigation();

  const handleDiagnose = () => {
    // Your diagnosis logic here
    // ...

    // After determining diagnosis, update the state
    setDiagnosis("...");

    // Uncomment below and replace with your logic to navigate to the medical professionals screen
    // navigation.navigate("MedicalProfessionals");
  };

  const handleAIResponse = () => {
    // Simulate AI-like response
    setDiagnosis(
      "I'm analyzing your symptoms... It might be related to a common cold. Please consult a medical professional for accurate advice."
    );
  };

  const navigateToMedicalProfessionals = () => {
    // Navigate to the MedicalProfessionals screen
    navigation.navigate("MedicalProfessionals");
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

        {diagnosis === "" && (
          <TouchableOpacity onPress={handleAIResponse} style={styles.button}>
            <Text style={styles.buttonText}>Ask AI for Help</Text>
          </TouchableOpacity>
        )}

        {diagnosis !== "" && (
          <TouchableOpacity
            onPress={navigateToMedicalProfessionals}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Contact Medical Professional</Text>
          </TouchableOpacity>
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
