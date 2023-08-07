// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "avinx-health.firebaseapp.com",
  projectId: "avinx-health",
  storageBucket: "avinx-health.appspot.com",
  messagingSenderId: "760032441842",
  appId: "1:760032441842:web:8c0e47dcf70e354ad1676b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authConfig = getAuth(app);
