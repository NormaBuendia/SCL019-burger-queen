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


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           HOLA MUNDO
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
