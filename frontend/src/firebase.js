// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-e7386.firebaseapp.com",
  projectId: "estate-e7386",
  storageBucket: "estate-e7386.appspot.com",
  messagingSenderId: "938544088870",
  appId: "1:938544088870:web:ab7bd9511dd73b910ea3e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);