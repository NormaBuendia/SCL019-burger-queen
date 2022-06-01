import React, { useEffect, useState } from 'react'
import logo from "../img/Logotipo1.png";
import { getOrders } from "../Firebase/function.js";
import { slideInUp } from "react-animations";
import Header from "../Header";
import { db } from '../Firebase/firebase_conf';
// import { updateDoc ,doc } from "firebase/firestore";
import { updateDoc ,doc } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

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
  // console.log(newStatus);
  };


  return (
    <div className="app" >
         <div className="cont">
           <Header img={logo} alt="logo" animationType={slideInUp} />
         </div> 
      <div className="row cont-menu">
      
      {orders.map((element) => {
          return (
            <div className="orders-pedidos btn btn-warning" key={element.id} >
              <p className="pa-boton-status"  key={element.data().Cliente.id}>Cliente : {element.data().Cliente}</p>
              <p className="pa-boton-status"key={element.data().orden.id}>Número de Mesa: {element.data().orden}</p>
              {element.data()?.Pedido?.map((item) => {
                return (
                  <section key={item.id}>
                     <p>{item.cant}   {item.name}</p> 
                     {/* <p>{item.dateOrder}</p> */}
                  </section>
                );
              })}
              <section>
              <p key={element.data().status.id} className="boton-cambio-status ">
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