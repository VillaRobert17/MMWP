import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCeO6Bo_8DoTzeiiL7HDC689UBwiN8yDpw",
    authDomain: "mmwp-25b75.firebaseapp.com",
    projectId: "mmwp-25b75",
    storageBucket: "mmwp-25b75.appspot.com",
    messagingSenderId: "396177527043",
    appId: "1:396177527043:web:bcf04c2de2ecb5f31fd936",
    measurementId: "G-B2DMTG5HYD"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db}