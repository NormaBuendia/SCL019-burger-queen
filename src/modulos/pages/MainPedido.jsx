import React, {  useContext } from "react";
import Delete from "../Delete.jsx";
import Restar from "../Restar.jsx";
import { UserContent } from "../userContext/UserContent.jsx";
import {
  addDoc,
  collection,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { db } from "../Firebase/firebase_conf.js";
import Cliente from "../Cliente.jsx";


const MainPedido = () => {
  
  const { cart, setCart } = useContext(UserContent);
  const { cliente, setCliente } = useContext(UserContent);
  console.log(cart);
  console.log(cliente);

 //refrescar
  const onRefresh = () => {
    //me devuelve el carrito vacio
    setCart([]);
  };

  // funcion para enviar pedido
  const enviarPedido = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "pedidos"), {
        Cliente: cliente || null,
        Pedido: cart,
        // Orden:orden,
        status: "Pendiente",
        dateOrder: Timestamp.fromDate(new Date()),
      });

      console.log(docRef);
    } catch (e) {
      console.log("error", e);
    }
    setCliente("");
    setCart([]);
    console.log(cliente);
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
      </div>
      <div className="boton-pedido">
        <button className="btn btn-danger mr-1" onClick={enviarPedido}>
          Enviar Pedido
        </button>
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
                <th className="subtotal"> {`$${element.price}.000`}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <section className="table">
        <thead>
          <tbody>
            <tr key={total}>
              <th className="total" scope="row">
                TOTAL
              </th>
              <th className="total"> {`$ ${total}.000`}</th>
            </tr>
          </tbody>
        </thead>
      </section>
          <div>
            <button onClick={() => onRefresh ()} className="btn btn-dark mr-1 boton-pedido">Limpiar</button>
         </div>
    </aside>
  );
};

export default MainPedido;
