import { getApp, getApps, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCev11rOeI6ii288OaAJrGF3XOn_z0gD0U",
  authDomain: "chatgpt-messenger-1cf08.firebaseapp.com",
  projectId: "chatgpt-messenger-1cf08",
  storageBucket: "chatgpt-messenger-1cf08.appspot.com",
  messagingSenderId: "390254450822",
  appId: "1:390254450822:web:10750010c5a89a38721907",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
