// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjEVKRV29xI4PbXI7Upt7NJquYI36Cvjg",
  authDomain: "social-media-app-rf.firebaseapp.com",
  projectId: "social-media-app-rf",
  storageBucket: "social-media-app-rf.appspot.com",
  messagingSenderId: "8666728093",
  appId: "1:8666728093:web:254924d2d5fefc01b5b674",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
