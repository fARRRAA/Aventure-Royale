import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
const firebaseConfig = {
    apiKey: "AIzaSyDOm9nBRZCpbGwfVI3sIFVGoMTHlWuIoEM",
    authDomain: "aventure-royale.firebaseapp.com",
    projectId: "aventure-royale",
    storageBucket: "aventure-royale.appspot.com",
    messagingSenderId: "924899381011",
    databaseUrl:'https://aventure-royale-default-rtdb.firebaseio.com',
    appId: "1:924899381011:web:e7bbed58c7cbf1cfdfd4e6"
  // apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export {firebase}