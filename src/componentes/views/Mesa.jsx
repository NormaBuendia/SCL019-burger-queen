import '../../App.css';
import React from "react";
import Back from "../Back";
import Menu1 from "../Menu1";





function Mesa() {
   
  const m1 = document.querySelector('#content-menu1')
  const m2 = document.querySelector('#content-menu2')

  
  
  
   
  return (
       <div className="App">
        <div className="content">
        <header className>
             <h1>Winpy Burguer</h1>
             <Back/>
            </header> 
            <button className='btn btn-danger' id='btnComida' >Comidas</button> 
             <button className='btn btn-danger' id='btnBebidas' >Bebidas</button>       
        <Menu1/>
          </div>
      </div>
    );
}

export default Mesa;