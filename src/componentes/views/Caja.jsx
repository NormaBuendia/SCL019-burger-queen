import '../../App.css';
import React from "react";
import Back from "../Back";
import PedidosCaja from '../PedidosCaja';




function  Caja () {
  

    return (
      
        <div className="contentCocinaF">
        <header className="App-header">
        <h1>Winpy Burguer</h1>
            <Back/>
        </header>  
        <body>
        <PedidosCaja/>    
        </body>      
        
        </div>
      
    
    );
    }
    export default Caja