// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3usPe1Ls0tQj58NcW77P1K47Ky2GUre4",
  authDomain: "burgerqueen-741eb.firebaseapp.com",
  projectId: "burgerqueen-741eb",
  storageBucket: "burgerqueen-741eb.appspot.com",
  messagingSenderId: "99648173086",
  appId: "1:99648173086:web:aef49facf86659ab812a0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app)
export {
  app,
  db
}