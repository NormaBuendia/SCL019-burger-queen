import "../App.css";
import React from "react";
import Back from "../componentes/Back";
import PedidosNuevos from "../componentes/PedidosNuevos";

function Cocina() {
  return (
    <div className="contentCocinaF">
      <header className="App-header">
        <h1>Wimpy Burger</h1>
        <Back />
      </header>
      <PedidosNuevos />
    </div>
  );
}

export default Cocina;
