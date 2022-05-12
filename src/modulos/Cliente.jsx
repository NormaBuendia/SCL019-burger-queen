import React from "react";

const Cliente = ({name, setCliente}) => {
 
  return (
    <div>
      <input onChange={(e)=>setCliente(e.target.value)} value={name} type="text" placeholder="cliente" className="cliente" required />
    </div>
  );
};

export default Cliente;
