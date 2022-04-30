import '../../App.css';
import React from "react";
import Back from "../Back";


function Cocina() {
    return (
      <div className="App">
        <div className="content">
        <header className="App-header">
            <Back/>
            <h1>Winpy Burguer</h1>
            </header>        
        <h2>Esta es la cocina</h2>
        </div>
      </div>
    );
  }

  export default Cocina