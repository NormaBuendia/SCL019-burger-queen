import React, { useState} from "react";
import MainMenu from './MainMenu'
import Header from "../Header";
import Cliente from "../Cliente";

import "./mainMenu.css";
import MainPedido from "./MainPedido";
import OrdenPedido from "../OrdenPedido";

const Mesero = () => {
  const [cliente, setCliente] = useState('')
  const [orden, setOrden] = useState('')
  

  return (
    <div className="app">
      <div className="cont">
        <Header />
        
        <div className="cont-menu ">
          <div className="">
          <MainMenu/>
          <OrdenPedido setOrden={setOrden} name={orden}/>
          <Cliente setCliente={setCliente} name={cliente}/>
          </div>
        </div>
        <div className="main-order">
          <div className="orderContent">
            <MainPedido />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mesero;
