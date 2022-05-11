import React, { useContext } from "react";
import Delete from "../Delete.jsx";
import Restar from "../Restar.jsx";
import { UserContent } from "../userContext/UserContent.jsx";

const MainPedido = () => {
  //orden
  let numberOrder = 1;
  //donde tengo la data
  const { cart, setCart } = useContext(UserContent);
// funcion remover
  const remove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  const restCant = (id) => {
    
    const arrCart = cart.map((item) => {
     
      if (item.cant > 1) {
        return item.id === id ? { ...item, cant: item.cant - 1 } : item;
      } else {
        return item.id === id ? { ...item, cant: 1 } : item;
      }
    });
    setCart(arrCart);
  
  };

 

  
  // funcion para sumar los productos
  let subTotal = 0;
  const total = cart.reduce(
    (acc, curr) => acc + curr.price * curr.cant,subTotal);


  return (
    <section key={numberOrder}>
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
