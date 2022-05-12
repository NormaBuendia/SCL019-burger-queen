import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";


export const firebaseConfig = {
  apiKey: "AIzaSyDgCv-0N7BP3HkHOqd27sKE609zU8yZ-Cw",
  authDomain: "winpy-burger-99638.firebaseapp.com",
  projectId: "winpy-burger-99638",
  storageBucket: "winpy-burger-99638.appspot.com",
  messagingSenderId: "532864786570",
  appId: "1:532864786570:web:040b6b1bfe506d000c8d73",
};

const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const sendOrder = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch {
    console.error("Error adding document: ", );
  }
};
