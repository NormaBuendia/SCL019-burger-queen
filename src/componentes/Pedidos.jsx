import React, {useEffect, useContext} from "react"
import { UserContent } from "./useContext/UserContent";
import { collection, getDocs, } from "firebase/firestore"
import {db} from '../firebase-config'




export default function Pedidos (){
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
    

  
    return (
        <div className="container mb-2">
        <div className="row">
        <h3>Pedidos</h3>
            <div className="contentCocina">
                
               
                {
                    orden.map(item => (
                    <div className="contentList">
                    <div className="list-group-item" key={item.id}>
                    <div className="contentPedido">
                      <div>Cliente: {item.Cliente}</div>
                      <div>Estado: {item.status}</div>
                      <span>Hora: {item.dateOrder.toDate().toLocaleTimeString()}</span>
                     
                      {
                          
                         item.Pedido.map(item => (
                            
                            <div key={item.id} className="list-group-item2">
                                <div className="detallePedido">
                                <p className="spanPedido">{item.cant} {item.name}</p>
                                </div>
                            </div>
                        ))
                      }
                      
                      </div>
                      <button className="btnDelete">
                            Eliminar
                        </button>
                        </div>
                         </div>
                        
                    ))
                }
            
            </div>
           </div>
    </div>
    
    )
}

