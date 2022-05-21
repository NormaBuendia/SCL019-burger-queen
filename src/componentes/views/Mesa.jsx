import "../../App.css";
import React from "react";
import Back from "../Back";
import Tab from "../Tab";
import Orden from "../Orden";




function Mesa() {
  return (
    <div className="App">
      <div className="cont">
        <header>
          <h1>Winpy Burger</h1>
          <Back />
        </header>

        <div className="cont-menu">
          <div className="background-mesa-cocina">
            <div>
              {" "}
              <Tab />
            </div>
           
            <div className="orderContent">
              <Orden />
            </div>
            
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    </div>
  );
}

export default Mesa;
