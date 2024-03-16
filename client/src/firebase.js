// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-397ce.firebaseapp.com",
  projectId: "mern-blog-397ce",
  storageBucket: "mern-blog-397ce.appspot.com",
  messagingSenderId: "196090035536",
  appId: "1:196090035536:web:52104e1d8d124cf54fc055",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
