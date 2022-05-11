import React from "react";
import restar from "../img/restar.png";

//le paso los parametros
const Restar = ({ keys, rest }) => {
  return (
    //
    <figure onClick={() => rest(keys)}>
      <img className="logo-restar" src={restar} alt="restar" />
    </figure>
  );
};

export default Restar;
