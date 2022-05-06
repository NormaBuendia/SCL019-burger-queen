import { useState } from "react";
import "../App.css";
import Menu from "./Menu";
import Menu2 from "./Menu2";

function Tab () {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    
    <div className="containerT">
      <div className="bloc-tabs">
        
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Bebidas
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Comidas
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          
          <hr />
          <Menu/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        
          <hr />
          <Menu2/>
        </div>

        
      </div>
    </div>
  )
}

export default Tab
