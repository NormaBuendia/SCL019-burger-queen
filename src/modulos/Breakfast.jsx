import React, { useContext } from "react";
import desayuno from "./Data/desayuno.json";
import { UserContent } from "./userContext/UserContent";

function Breakfast() {
  //carrito
  const { cart, setCart } = useContext(UserContent);
  const addCart= (element) => {
    // tiene que definir si existe el producto, revisamos que en el carrito no haya otro producto igual
    if (cart.some((item) => item.id === element.id)) {
      // si existe creamos un nuevo array, 
      const arrCard = cart.map((item) =>
      //comprobamos si el producto que hay en el carrito es igual a un producto nuevo, si es asi agrega de 1 en 1 o sino regresa el producto
        item.id === element.id ? { ...item, cant: item.cant + 1 } : item
      );
      //agrego arrCard a cart con la funcion setCard
      setCart(arrCard);
    } else {
      setCart([
        ...cart,
         //se ejecuta en caso de agregar un producto que no este en el carrito, se agrega un nuevo objeto, y se puede agregar de 1 en 1
        { id: element.id, name: element.name, price: element.price, cant: 1 },
      ]);
    }
  };
  return (
    <div className="main-button">
      {desayuno.breakfast.map((element) => {
        return (
          <div key={element.id}>
            <button
              className="btn btn-lg btn-warning  mx-1"
              onClick={() => addCart(element)}
            >
              {element.name} 
              {/* {`$ ${element.price} .000`} */}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Breakfast;
