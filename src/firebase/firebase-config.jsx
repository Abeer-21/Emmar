import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrqTVjwLyjcIvGtR2xLqMuuVnhTP5GSEg",
  authDomain: "react-firebase-e4fa6.firebaseapp.com",
  projectId: "react-firebase-e4fa6",
  storageBucket: "react-firebase-e4fa6.appspot.com",
  messagingSenderId: "652610727194",
  appId: "1:652610727194:web:ea89e578c2f7470badd0a3",
  measurementId: "G-QBPZT5V7KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);