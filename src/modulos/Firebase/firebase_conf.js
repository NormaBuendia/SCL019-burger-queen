
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore}  from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
//import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3usPe1Ls0tQj58NcW77P1K47Ky2GUre4",
  authDomain: "burgerqueen-741eb.firebaseapp.com",
  projectId: "burgerqueen-741eb",
  storageBucket: "burgerqueen-741eb.appspot.com",
  messagingSenderId: "99648173086",
  appId: "1:99648173086:web:aef49facf86659ab812a0f"
};
const app = initializeApp(firebaseConfig);

//Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// export const sendOrderPrueba = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch {
//     console.error("Error adding document: ", );
//   }
// };