
import React, { useEffect, useState } from "react";
import Header from "../Header";
import logo from "../img/Logotipo1.png";
import { slideInUp } from "react-animations";
import { getOrders } from "../Firebase/function.js";
import { db } from '../Firebase/firebase_conf';
import { updateDoc ,doc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";


function Cocina() {
  const [orders, setOrders] = useState([]);
  

  // UF es la funcion que se va a ejecutar para traer los pedidos de FS, recibe 2 argumentos
  // el primer argumento es una funcion y esa, es la que queremos que se ejecute como un efecto secundario, y eso va a ocurrir cuando se cargue
  // la pagina, cuando carguemos el documento por primera vez, useEffects se va a ejecutar


  
  useEffect(() => {
    
    const getOrdersData = async () => {
      const pedidos = await getOrders();
      //console.log(pedidos)
      setOrders(pedidos.docs);
    };
    getOrdersData();
    
  }, []);
    // console.log(getOrdersData);



    const actualizarOrden = async (id) => {
      const orderDoc = doc(db, "pedidos", id);
      const newStatus= { status: "Atendido", style:'green'};
      await updateDoc(orderDoc, newStatus);
      window.location.reload(false)
    console.log(newStatus);
    };


  console.log(orders);

  return (
    <div className="app">
      <div className="cont">
        <Header img={logo} alt="logo" animationType={slideInUp} />
      </div>
      <div className="row cont-menu">
        {orders.map((element) => {
          return (
            <div className="orders-pedidos btn btn-warning">
              <p className="pa-boton-status">Cliente : {element.data().Cliente}</p>
              {element.data()?.Pedido?.map((item) => {
                return (
                  <section>
                     <p>{item.cant}   {item.name}</p> 
                     <p>{item.dateOrder}</p>
                  </section>
                );
              })}
              <section>
              <p className="pa-boton-status">
               {element.data().status}
             <button onClick={()=> actualizarOrden(element.id)} className="boton-status btn btn-danger mr-1 boton-status">
                
                </button>
              </p>
              </section>
            </div>
            
          );
        })}
        
      </div>
    </div>
  );
}


export default Cocina;






















