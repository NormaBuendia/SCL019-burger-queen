import React, { useContext } from 'react';
import data from "../data/menu";
import {UserContent} from './useContext/UserContent'

function Menu2(props) {
  const { cart, setCart } = useContext(UserContent);

    const addcart = (element) => {
        if (cart.some(item => item.id === element.id)) {
            const arrCard = cart.map((item) =>
                item.id === element.id ? { ...item, cant: item.cant + 1 } : item
            );
            setCart(arrCard);

        } else {
            setCart([...cart, { id: element.id, name: element.name, price: element.price, cant: 1 }]
            );
        }

    }
  return (
    <div id="content">
      <div data-content id="menu2">
        {data.platos.map((element) => {
          return (
            <button onClick={() =>addcart(element)} className="btn btn-warning" id="btnMenu2" key={element.id}>
             {props.name} {element.name}: {element.badge}{element.price}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Menu2;
