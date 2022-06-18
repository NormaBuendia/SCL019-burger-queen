import React from "react";
import styled , {keyframes} from 'styled-components'
import { Link } from "react-router-dom";

import "./header.css";

function Header({img,alt, animationType,children}) {
  const animation = keyframes `${animationType}`
  const AnimationDiv =styled.div `
  animation: 1s ${animation};
  `;
  return (
  <AnimationDiv>
    <header>
     
        <div className="head-mesero">
            <Link to="/">
                 <img className="logo" src={img} alt={alt} />
            </Link>
                <h1 className="text-white"> LA   BARBIE   QUEEN </h1>
            <Link to="/Pedidos">
               <button className=" btn historial">
                  Historial de Pedidos
                </button>
            </Link>
        </div>
        <div>
             <div>
               {children}
             </div>
        </div>
    </header>
  </AnimationDiv>
  );
}

export default Header;


