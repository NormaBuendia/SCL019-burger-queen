import React, { useContext } from "react";
import desayuno from "./Data/desayuno.json";
import { UserContent } from "./userContext/UserContent";

function Breakfast() {
  const { cart, setCart } = useContext(UserContent);
  const addCart= (element) => {
    if (cart.some((item) => item.id === element.id)) {
      const arrCard = cart.map((item) =>
        item.id === element.id ? { ...item, cant: item.cant + 1 } : item
      );
      setCart(arrCard);
    } else {
      setCart([
        ...cart,
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
