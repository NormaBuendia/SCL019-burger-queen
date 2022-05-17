import React, {useEffect, useContext} from "react"
import { UserContent } from "./useContext/UserContent";
import { collection, getDocs, updateDoc, doc} from "firebase/firestore"
import {db} from '../firebase-config'
import Pedidos from "./Pedidos";


export default function PedidosNuevos (){
    const { orden, setOrden } = useContext(UserContent);

    useEffect(() => {
        
        const getDatos = async () => {
            
        const data = await getDocs(collection(db, "Pedidos"))
        data.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            const arrayPedidos = data.docs.map(doc => ({ id: doc.id, ...doc.data()}))
            setOrden(arrayPedidos)
        })
        }

        getDatos()
    }, [])

    const changeStatus = async (id) => {
        const orderDoc = doc(db, "Pedidos", id);
        const newStatus= { status: "Listo" };
        await updateDoc(orderDoc, newStatus);
      };

      const archivar = async (id) => {
        const orderData = doc(db, "Pedidos", id);
        const newCollection= { collection: "Archivo" };
        await updateDoc(orderData, newCollection);
      };


  
  
    


return (
    
    <div className="cont-menu">
    <div  className="background-mesa-cocina2">
         <table  className="tablePedidos">
                <tbody>
                <tr>
        
        {
            orden.map(item => (
                
               
                   
               <th key={item.id} className="thPedidos">
               <div className="contentPedidos" >
                      <section className="sectionPedidos1">
                      <span><strong>Cliente: </strong>{item.Cliente}</span>
                      <span><strong>Status: </strong>{item.status}</span>
                     <span><strong>Hora: </strong>{item.dateOrder.toDate().toLocaleTimeString()}</span>
                      </section>
                      <section className="sectionPedidos2">
                      {
                          
                          item.Pedido.map(item => (
                             
                            <div className="card text-white bg-warning mb-3" id="cocina2" key={item.id}>
                             <p className="spanPedido">{item.cant} {item.name}</p>
                             
                        </div>
                        
                               
                            ))           
                        }
        <button onClick={()=> changeStatus(item.id)} className="btnEntrega" >Entregar</button>
        <button onClick={()=> archivar(item.id)} className="btnArchivo" >Archivar</button>
           </section>
           </div>
           </th>
          
           
            ))
                    }
                     </tr>
          </tbody>
           </table>
                    
        </div>
        </div>
)
}

    
