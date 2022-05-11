import React from "react";
import MainMenu from './MainMenu'
import Header from "../Header";
import Cliente from "../Cliente";

import "./mainMenu.css";
import MainPedido from "./MainPedido";

const Mesero = () => {
  return (
    <div className="app">
      <div className="cont">
        <Header />
        
        <div className="cont-menu ">
          <div className="">
          <MainMenu/>
          <Cliente />
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
