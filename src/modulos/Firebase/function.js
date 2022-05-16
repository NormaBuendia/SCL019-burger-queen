import { db } from './firebase_conf.js';
import { collection, getDocs,  query} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

const OrdersCollection = collection(db, 'pedidos');


export const getOrders = async () => {
    const result = await getDocs(query(OrdersCollection));
    return result;

}

