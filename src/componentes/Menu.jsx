import React, { useContext } from 'react';
import data from "../data/menu";
import {UserContent} from '../componentes/userContext/UserContent'

function Menu() {
  const {cart,setCart} = useContext(UserContent);
  
  const addcart = (element) =>{
    if(cart.some(item=> item.id===element.id)){
     const arrCard = cart.map((item) =>
     item.id === element.id ? { ...item, cant: item.cant + 1 } : item
   );
   setCart(arrCard);

  }else{
    setCart([...cart,{ id: element.id, name: element.name, price: element.price, cant:1 }]
        );
   }
       
        }

  return (
    <div id="content">
      <div data-content id="menu1" className="active">
        {data.bebestibles.map((element) => {
          return (
            <button onClick={() =>addcart(element)} className="btn btn-warning" id="btnMenu1" key={element.id}>
              {element.name}: {element.badge}{element.price} 

              
                                  
            </button>
          );
        })}
      </div>
      
    </div>
  );
}
export default Menu;
