import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqTL0jDIKkX_VOgOponZNcivXm4aKWTRs",
  authDomain: "celulares-7933e.firebaseapp.com",
  projectId: "celulares-7933e",
  storageBucket: "celulares-7933e.appspot.com",
  messagingSenderId: "555665684363",
  appId: "1:555665684363:web:f480acbaa805c43b7aa18e",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
