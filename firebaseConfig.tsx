// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF1AwYdAx0kC-i-umeOdTJqQmq7GFGkis",
  authDomain: "bilbul-d65a2.firebaseapp.com",
  projectId: "bilbul-d65a2",
  storageBucket: "bilbul-d65a2.appspot.com",
  messagingSenderId: "533910668822",
  appId: "1:533910668822:web:6440c625742fb811c51737",
  measurementId: "G-B0LBNJBDVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics, firebaseConfig };
