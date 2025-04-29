// firebase/client.ts

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ use client auth
import { getFirestore } from "firebase/firestore"; // ✅ use client firestore

const firebaseConfig = {
  apiKey: "AIzaSyBzTbuU1heseZ4v5yzkDvy58Y9Br-VDL1k",
  authDomain: "interview-f7c29.firebaseapp.com",
  projectId: "interview-f7c29",
  storageBucket: "interview-f7c29.appspot.com", // ✅ minor fix: .app → .appspot.com
  messagingSenderId: "449212484297",
  appId: "1:449212484297:web:ff24d5d8cd7ca576791b18",
  measurementId: "G-05VJ1735VW",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
