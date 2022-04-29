import '../App.css';
import React from "react";
import Back from "./Back";
import Menu1 from "./menu1";


function Mesa() {
  return (
       <div className="App">
        <div className="content">
        <header className="App-header">
            <Back/>
            <h1>Winpy Burguer</h1>
            </header>        
        <Menu1/>
         </div>
      </div>
    );
}

export default Mesa;