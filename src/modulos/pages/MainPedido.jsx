import React, { useState,useContext } from "react";
import Delete from "../Delete.jsx";
import Restar from "../Restar.jsx";
import Cliente from "../Cliente.jsx";
import OrdenPedido from "../OrdenPedido.jsx";
import { UserContent } from "../userContext/UserContent.jsx";

const MainPedido = () => {
  const [cliente, setCliente] = useState('')
  const [orden, setOrden] = useState('')
  //orden
  //let numberOrder = 1;

  //donde tengo la data
  const { cart, setCart } = useContext(UserContent);
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
        // o retorna el item se queda en 1 o el item
        return item.id === id ? { ...item, cant: 1 } : item;
      }
    });
    
    setCart(arrCart);
  
  };

 

  
  // -----funcion para sumar los productos
  //valor inicial
  let subTotal = 0;
  const total = cart.reduce(
    //previo, actual
    (previo, actual) => previo + actual.price * actual.cant, subTotal);

  return (
    <section >
      <OrdenPedido setOrden={setOrden} name={orden}/>
      <Cliente setCliente={setCliente} name={cliente}/>
      <article className="">
      
        <table className="">
          <thead >
            <tr className="pp-pedido">
              <th className="pedido" scope="col">
                Cantidad
              </th>
              <th className="pedido" scope="col">
                Restar
              </th>
              <th className="pedido" scope="col">
                Producto
              </th>
              <th className="pedido" scope="col">
                Borrar
              </th>
              <th className="pedido" scope="col">
                $
              </th>
            </tr>
          </thead>
          {cart.map((element) => {
            return (
              <tbody  className="cont-order">
                <tr className="pp-pedido" key={element.id}>
                  <th className="cant"scope="colum">{element.cant}</th>
                  <th  className="add">
                    <Restar keys={element.id} rest={restCant} />
                  </th>
                  <td className="product" key={element.id}> {element.name}</td>
                  <td onClick={() => remove(element.id)}> <Delete key={element.id} /></td>
                  <td className="subtotal"> {`$${element.price}.000`}</td>
                  
                </tr>
              </tbody>
            );
          })}
        </table>
      </article>
      <article className="div">
        <table className="table">
          <thead>
            <tbody>
              <tr className="total" key={total}>
                <th className="total" scope="row">
                  TOTAL
                </th>
                <td className="total" ></td>
                <td className="total"> {`$ ${total}.000`}</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </article>
    </section>
  );
};

export default MainPedido;

// const addCant = (id) => {
//   const arrCard = cart.map((item) =>
//       item.id === id ? { ...item, cant: item.cant + 1 } : item
//   );
//   setCard(arrCard);
// }
