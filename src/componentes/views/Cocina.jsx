import '../../App.css';
import React, { Component } from "react";
import Back from "../Back";
import Pedidos from '../Pedidos';
import { getFirestore} from "firebase/firestore";


function  Cocina () {
  

    return (
      
        <div className="contentCocina">
        <header className="App-header">
            <Back/>
            <h1>Winpy Burguer</h1>
            </header>        
        <Pedidos/>
        </div>
      
    
    );
    }
  




  export default Cocina