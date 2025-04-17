// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiSXhnsAmqqvRh_nNo9De9B-gQKHKJFvo",
  authDomain: "prof-info-7be40.firebaseapp.com",
  projectId: "prof-info-7be40",
  storageBucket: "prof-info-7be40.firebasestorage.app",
  messagingSenderId: "595167912868",
  appId: "1:595167912868:web:e5aca9f4714062f6ab9731",
  measurementId: "G-4K3YZ4JSP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);