import React, { useContext } from "react";
import { UserContent } from "./useContext/UserContent";

const Cliente = () => {
  const { cliente, setCliente } = useContext(UserContent);

  return (
    <div className="input-group flex-nowrap name">
      <input
        type="text"
        className="input-name"
        placeholder="Nombre cliente"
        aria-label="Nombre del cliente"
        aria-describedby="addon-wrapping"
        value={cliente}
        onChange={(e) => setCliente(e.target.value)}
      ></input>
    </div>
  );
};

export default Cliente;
