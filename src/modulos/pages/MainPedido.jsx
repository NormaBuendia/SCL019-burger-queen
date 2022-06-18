import React, {  useContext } from "react";
import Delete from "../Delete.jsx";
import Restar from "../Restar.jsx";
import { UserContent } from "../userContext/UserContent.jsx";
import {
  addDoc,
  collection,
  Timestamp,
} 
from "firebase/firestore";
// from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import { db } from '../Firebase/firebase_conf.js';
import Cliente from "../Cliente.jsx";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Orden from "../Orden.jsx";


const MainPedido = () => {
  
  const { cart, setCart } = useContext(UserContent);
  const { cliente, setCliente } = useContext(UserContent);
  const { orden, setOrden} = useContext(UserContent);

  console.log(cart);
  console.log(cliente);
  console.log(orden);

 //refrescar
  const onRefresh = () => {
    //me devuelve el carrito vacio
    setCart([]);
  };

  // funcion para enviar pedido
  const enviarPedido = async () => {
    await addDoc(collection(db, "pedidos"), {
        Cliente: cliente || null,
        Pedido: cart,
        orden: orden,
        status: "Pendiente",
        date: Timestamp.fromDate(new Date()),
        
      });
      
     setCliente("");
    setCart([]);
    setOrden('');
    // console.log(cliente);

//Modal para saber si se envio el pedido
    const MySwal = withReactContent(Swal)

    await MySwal.fire({
      title: <strong >Exito!</strong>,
      html: <i >Su pedido fue enviado!</i>,
      icon: 'success'
      
    })
    
  };


  

  // funcion remover
  const remove = (id) => {
    //filtrar , si lo que id no es igual
    setCart(cart.filter((item) => item.id !== id));
  };

  const restCant = (id) => {
    //array  donde guardo la nueva data
    const arrCart = cart.map((item) => {
      // si item es mayor a 1
      if (item.cant > 1) {
        // retorna resta uno o retorna el item
        return item.id === id ? { ...item, cant: item.cant - 1 } : item;
      } else {
        // o retorna el item se queda en 1 o retorna el item
        return item.id === id ? { ...item, cant: 1 } : item;
      }
    });

    setCart(arrCart);
  };

  // -----funcion para sumar los productos
  // reduce toma un arreglo de objetos y nos retorna un unico elemento
  //valor inicial
  let subTotal = 0;
  const total = cart.reduce(
    //acumulador, actual = acc + precio actual * cantidad actual, el valor predeterminado de acc (0)
    (acc, actual) => acc + actual.price * actual.cant,
    subTotal
  );

  return (
    <aside className="block col-2 orderContent mainOrden">
          <div >
             <Cliente />
             <Orden />
          </div>

        <div className="boton-pedido">
             {orden.length !==0  && cliente.length !==0 && cart.length !== 0? (

             <button className="btn btn-danger mr-1" onClick={() => {
             setCart([])
             enviarPedido()
             setOrden('');
             setCliente("")
              }}
              >
                Enviar Pedido
              </button>
             ) : (
             <div style={{ color: "red" }}>
             <strong> ORDEN VACIA | SIN NUMERO DE MESA | SIN NOMBRE DE CLIENTE</strong>
              </div>
                 )
        
              }
        </div>
      <table className="table">
        <thead>
          <tr className="pp-pedido">
            <th scope="colum"> Cantidad</th>
            <th scope="colum">Restar</th>
            <th scope="colum">Producto</th>
            <th scope="colum">Borrar</th>
            <th scope="colum"> $</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((element) => {
            return (
              <tr className="cont-order" key={element.id}>
                <th className="cant" scope="colum">{element.cant}</th>
                <th className="restar"><Restar keys={element.id} rest={restCant} /></th>
                <th className="product" key={element.id}>{element.name}</th>
                <th onClick={() => remove(element.id)}><Delete key={element.id} /></th>
                <th className="subtotal"> {`$${element.price}`}</th>
              </tr>
            );
          })}
        </tbody>
      
      
       
          {/* <tbody className="table"> */}
          <thead >
            <tr key={total}>
              <th  scope="row">
                TOTAL
              </th>
              <th className="total"> {`$ ${total}`}</th>
            </tr>
            </thead>
          {/* </tbody> */}
         
      
      </table>
     <div>
      <button onClick={() => onRefresh ()} className="btn btn-dark mr-1 boton-pedido">Limpiar</button>
     </div>
    </aside>
  );
};

export default MainPedido;
