import { db } from './firebase_conf.js';
import { collection, getDocs, updateDoc, doc,orderBy,query} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const ordersCollection = collection(db, 'pedidos');


export const getOrders = async () => {
 
    const result = await getDocs(query(ordersCollection), orderBy("status", "desc"));
    return result;

}

export const statusOrders = async (docum)=>{
await updateDoc(doc(ordersCollection, docum),{
    status:'Listo'
})
console.log('Estado Listo')
}