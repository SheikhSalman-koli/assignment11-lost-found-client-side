// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD5VuVHKV-l6aIClv5Kyab_EU5Rjos37s",
  authDomain: "lost-found-platform-813af.firebaseapp.com",
  projectId: "lost-found-platform-813af",
  storageBucket: "lost-found-platform-813af.firebasestorage.app",
  messagingSenderId: "1034369218672",
  appId: "1:1034369218672:web:de26552fbd4a4632dedcb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);