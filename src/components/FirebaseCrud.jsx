import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { fireStoreDb } from "../firebaseConfig";

const FirebaseCrud = () => {

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(fireStoreDb, "users"));
    console.log(querySnapshot.docs);

    const data = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().first) {
        data.push({ id: doc.id, text: doc.data().first });
      }
    });
    setData(data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default FirebaseCrud;