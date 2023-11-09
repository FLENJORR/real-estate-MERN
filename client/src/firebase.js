// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "flenjorr-estate.firebaseapp.com",
  projectId: "flenjorr-estate",
  storageBucket: "flenjorr-estate.appspot.com",
  messagingSenderId: "1016557940026",
  appId: "1:1016557940026:web:7647d3e508354c8201f403"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 