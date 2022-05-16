import React, { useState } from "react";
import Breakfast from "../Breakfast.jsx";
import Lunch from "../Lunch.jsx";
import Drinks from "../Drinks.jsx";

function MainMenu() {
  const [toggle, setToggle] = useState(1);
  console.log(toggle);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <main className="block col-2">
      <div className="row">
        <div className="boton-pedido">
          <button
            onClick={() => toggleTab(1)}
            className={
              toggle === 1
                ? "btn btn-lg btn-warning tabs-productos active-tabs-productos"
                : "tabs-productos"
            }
          >
            Desayuno
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={
              toggle === 2
                ? "btn btn-lg btn-warning tabs-productos active-tabs-productos"
                : "tabs-productos"
            }
          >
            Comida
          </button>
          <button
            onClick={() => toggleTab(3)}
            className={
              toggle === 3
                ? "btn btn-lg btn-warning tabs-productos active-tabs-productos"
                : "tabs-productos"
            }
          >
            Bebidas
          </button>
        </div>

        <div className="content-tabs">
          <div className={toggle === 1 ? "content  active-content" : "content"}>
            <Breakfast />
          </div>
          <div className={toggle === 2 ? "content  active-content" : "content"}>
            <Lunch />
          </div>
          <div className={toggle === 3 ? "content  active-content" : "content"}>
            <Drinks />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainMenu;
