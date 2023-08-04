import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAiB6YbGI7HZTZ5xlHvj93wGP-sLx22wVs",
  authDomain: "playstation-aa848.firebaseapp.com",
  projectId: "playstation-aa848",
  storageBucket: "playstation-aa848.appspot.com",
  messagingSenderId: "712093356519",
  appId: "1:712093356519:web:1522f91bfe93155703ad42",
  measurementId: "G-L71N7MZ6CF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);
