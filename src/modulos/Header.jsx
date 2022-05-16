import React from "react";
import styled , {keyframes} from 'styled-components'
import { Link } from "react-router-dom";

import "./header.css";

function Header({img,alt,name, animationType,children}) {
  const animation = keyframes `${animationType}`
  const AnimationDiv =styled.div `
  animation: 1s ${animation};
  `;
  return (
    <AnimationDiv>
    <header>
     
        <div className="head-mesero">
          <Link to="/">
            <img className="logo-welcome" src={img} alt={alt} />
          </Link>
          <h1 className="text-white">BURGER QUEEN </h1>
        </div>
        <div>
          <div>
            {children}
          </div>
        </div>
        <div>
       
        </div>
      
      </header>
      </AnimationDiv>
  );
}

export default Header;
