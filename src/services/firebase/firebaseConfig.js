import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCEH4G2dO_37yo5cq4CHcAxpqMtbKixqg",
  authDomain: "e-commerce-imhoffjose.firebaseapp.com",
  projectId: "e-commerce-imhoffjose",
  storageBucket: "e-commerce-imhoffjose.appspot.com",
  messagingSenderId: "186234676261",
  appId: "1:186234676261:web:649f6a1bd7cef94235cbcc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)