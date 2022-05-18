import React from "react";
import restar from "../img/restar.png";

// llevo keys y rest a  MainPedido
const Restar = ({ keys, rest }) => {
  return (
    //
    <figure onClick={() => rest(keys)}>
      <img className="logo-restar" src={restar} alt="restar" />
    </figure>
  );
};

export default Restar;

