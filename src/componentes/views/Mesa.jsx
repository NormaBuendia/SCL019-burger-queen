import '../../App.css';
import React from "react";
import Back from "../Back";
import Menu1 from "../Menu1";
import Menu2 from '../Menu2';



function Mesa() {
    
  

  return (
       <div className="App">
        <div className="content">
        <header className>
             <h1>Winpy Burguer</h1>
             <Back/>
            </header> 
            <button className='btn btn-danger' id='btnComida'>Comidas</button> 
             <button className='btn btn-danger' id='btnBebidas'>Bebidas</button>       
        <Menu1/>
        <Menu2/>
         </div>
      </div>
    );
}

export default Mesa;