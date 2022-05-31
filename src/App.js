import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  /*Link*/
} from "react-router-dom";
import "./App.css";
import Welcome from "./modulos/Welcome";
import Mesero from "./modulos/pages/Mesero";
import Cocina from './modulos/pages/Cocina'
import Pedidos from "./modulos/pages/Pedidos";


import { UseStates } from "./modulos/userContext/UserContent";



function App() {
  return (
    <UseStates>
      <BrowserRouter>
     <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Mesero" element={<Mesero />} />
        <Route path="/Cocina" element={<Cocina />} />
       
        <Route path="/Pedidos" element={<Pedidos/>} />
      </Routes>
     </div>
     </BrowserRouter>
    </UseStates>
  );
}


export default App;


