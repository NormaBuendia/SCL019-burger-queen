// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgCv-0N7BP3HkHOqd27sKE609zU8yZ-Cw",
    authDomain: "winpy-burger-99638.firebaseapp.com",
    projectId: "winpy-burger-99638",
    storageBucket: "winpy-burger-99638.appspot.com",
    messagingSenderId: "532864786570",
    appId: "1:532864786570:web:040b6b1bfe506d000c8d73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};