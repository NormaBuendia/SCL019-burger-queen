import "../../App.css";
import React from "react";
import Back from "../Back";
import Tab from "../Tab";
import Orden from "../Orden";
import { useState } from "react";
import Cliente from "../Cliente"
 

function Mesa() {
  return (
    <div className="App">
      <div className="cont">
        <header>
          <h1>Winpy Burguer</h1>
          <Back />
        </header>
        
        <div className="cont-menu">
          <div className="background-mesa-cocina">
          <Cliente/>         
            <Tab />
            <div className="orderContent">
            <Orden />
          </div>
           
          </div>
          <div className="col-md-3"></div>
          
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </div>
  );
}

export default Mesa;
