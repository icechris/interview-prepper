// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPwBIU3w1Llp5dZwJgDEhRCPpOA-Oe_HY",
  authDomain: "ai-project-4e55b.firebaseapp.com",
  projectId: "ai-project-4e55b",
  storageBucket: "ai-project-4e55b.firebasestorage.app",
  messagingSenderId: "951369332845",
  appId: "1:951369332845:web:5e520726aaf7e11ab5a764",
  measurementId: "G-V1QYELCBS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);