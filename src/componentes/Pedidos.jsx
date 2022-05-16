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
            <div className="contentocina">
                <h3>Pedidos</h3>
               
                {
                    orden.map(item => (
                    <div className="contentList">
                    <div className="list-group-item" key={item.id}>
                        <div className="contentPedido">
                      <span>Cliente: {item.Cliente}</span>
                      <span>Estado: {item.status}</span>
                      <span>Hora: {item.dateOrder.toDate().toLocaleTimeString()}</span>
                      <section className="sectionPedido">
                      {
                          
                         item.Pedido.map(item => (
                            
                            <div key={item.id} className="list-group-item">
                                <div className="detallePedido">
                                <p className="spanPedido">{item.cant} {item.name}</p>
                                </div>
                            </div>
                           
                            

                         ))
                      }
                      </section>
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

