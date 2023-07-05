import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBKsXOneWLk1OGyKjlciYaXcUzhBxnmrnw",
    authDomain: "pssales-11bfb.firebaseapp.com",
    projectId: "pssales-11bfb",
    storageBucket: "pssales-11bfb.appspot.com",
    messagingSenderId: "118386057933",
    appId: "1:118386057933:web:66bc06ed3b5fbaf3f3ff84",
    measurementId: "G-6Q7ESNK3RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);

