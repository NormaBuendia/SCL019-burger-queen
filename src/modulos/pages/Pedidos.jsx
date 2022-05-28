import React, { useEffect, useState } from 'react'
import logo from "../img/Logotipo1.png";
import { getOrders } from "../Firebase/function.js";
import { slideInUp } from "react-animations";
import Header from "../Header";
import { db } from '../Firebase/firebase_conf';
import { updateDoc ,doc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";


const Pedidos = () => {
const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    const getOrdersData = async () => {
      const pedidos = await getOrders();
      //console.log(pedidos)
      setOrders(pedidos.docs);
    };
    getOrdersData();
    
  }, []);

  
  const actualizarOrden = async (id) => {
    const orderDoc = doc(db, "pedidos", id);
    const newStatus= { status: "Atendido", style:'green'};
    await updateDoc(orderDoc, newStatus);
    window.location.reload(false)
  console.log(newStatus);
  };


  return (
    <div className="app" >
         <div className="cont">
           <Header img={logo} alt="logo" animationType={slideInUp} />
         </div> 
      <div className="row cont-menu">
      
      {orders.map((element) => {
          return (
            <div className="orders-pedidos btn btn-warning">
              <p className="pa-boton-status">Cliente : {element.data().Cliente}</p>
              <p className="pa-boton-status">Número de Mesa: {element.data().orden}</p>
              {element.data()?.Pedido?.map((item) => {
                return (
                  <section>
                     <p>{item.cant}   {item.name}</p> 
                     {/* <p>{item.dateOrder}</p> */}
                  </section>
                );
              })}
              <section>
              <p className="boton-cambio-status ">
               {element.data().status}
             <button onClick={()=> actualizarOrden(element.id)} className="boton-cambio-status ">
                
                </button>
              </p>
              </section>
            </div>
            
          );
        })}



      </div>   
    </div>
  )
}

export default Pedidos