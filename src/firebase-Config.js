import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "lol-tier-list-maker.firebaseapp.com",
  databaseURL: "https://lol-tier-list-maker-default-rtdb.firebaseio.com",
  projectId: "lol-tier-list-maker",
  storageBucket: "lol-tier-list-maker.appspot.com",
  messagingSenderId: "353979366460",
  appId: "1:353979366460:web:717bccc55313df2fbb9739",
  measurementId: "G-SN8T4HQD0Q",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
