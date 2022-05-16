import React from "react";
import MainMenu from "./MainMenu";
import Header from "../Header";
import "./mainMenu.css";
import MainPedido from "./MainPedido";
import logo from "../img/Logotipo1.png";
import { slideInUp } from "react-animations";

const Mesero = () => {
 

  return (
    <div className="app">
      <div className="cont">
        <Header img={logo} alt="logo" animationType={slideInUp} /> 
      </div>
      <div className="row cont-menu">
        <MainMenu />
        <MainPedido />
      </div>
    </div>
  );
};

export default Mesero;
