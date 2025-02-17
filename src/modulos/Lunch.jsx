import React, { useContext } from "react";
import lunch from "./Data/lunch.json";

import { UserContent } from "./userContext/UserContent";

function Lunch() {
  const { cart, setCart } = useContext(UserContent);
  const addCard = (element) => {
    // revisamos que en el carrito no haya otro producto igual
    if (cart.some((item) => item.id === element.id)) {

      const arrCard = cart.map((item) =>
      //comprobamos si el producto que hay en el carrito es igual a un producto nuevo
        item.id === element.id ? { ...item, cant: item.cant + 1 } : item
      );
      //se ejecuta nuevo array
      setCart(arrCard);
    } else {
      setCart([
        ...cart,
        //se ejecuta en caso de agregar un producto que no este en el carrito, se agrega un nuevo objeto
        { id: element.id, name: element.name, price: element.price, cant: 1 },
      ]);
    }
  };
  return (
    
      <div className="main-button">
        {lunch.lunch.map((element) => {
          return (
            <div key={element.id}>
              <button
                className="btn btn-lg btn-warning  mx-1"
                onClick={() => addCard(element)}
                 >
                {element.name} 
              </button>
            </div>
          );
        })}
      </div>
   
  );
}

export default Lunch;

