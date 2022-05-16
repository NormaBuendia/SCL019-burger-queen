import React from "react";
import logo from "../img/Logotipo1.png";
import { Link } from 'react-router-dom';
//import MainButton from "./MainButton";


function Welcome() {
  return (
    <div className="component-welcome">
      <img className="logo-welcome" src={logo} alt="logo" />
      <div className= "welcome-text">
        <p>
          <h1 className="welcome-text"> LA BARBIE QUEEN </h1>
        </p>
      </div>

      <div className="conten-button">
        <Link to="/Mesero">
          <button className="boton-welcome btn-dark btn-lg mx-2 ">MESERO 🍟</button>
        </Link>
        <Link to="/Cocina">
          <button className="boton-welcome btn-dark btn-lg ">COCINA 🍔</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;



