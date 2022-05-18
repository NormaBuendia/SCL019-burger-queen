import * as React from "react";
import {
  Routes,
  Route,
  /*Link*/
} from "react-router-dom";
import "./App.css";
import Welcome from "./modulos/Welcome";
import Mesero from "./modulos/pages/Mesero";
import Cocina from './modulos/pages/Cocina'

import { UseStates } from "./modulos/userContext/UserContent";



function App() {
  return (
    <UseStates>
     <div className="app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Mesero" element={<Mesero />} />
        <Route path="/Cocina" element={<Cocina />} />
      </Routes>
     </div>
    </UseStates>
  );
}


export default App;


