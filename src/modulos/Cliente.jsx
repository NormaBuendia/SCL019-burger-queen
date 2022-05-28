import React,{useContext} from "react";
import { UserContent } from "./userContext/UserContent";

const Cliente = () => {
  const { cliente,setCliente } = useContext(UserContent);
  return (
    <div className="orden-block">
      <input
        onChange={(e) => setCliente(e.target.value)}
        value={cliente}
        type="text"
        placeholder="cliente"
        className="cliente"
        required
      />
    </div>
  );
};

export default Cliente;




// const Cliente = ({ cliente, setCliente }) => {
//   return (
//     <div>
//       <input
//         onChange={(e) => setCliente(e.target.value)}
//         value={cliente}
//         type="text"
//         placeholder="cliente"
//         className="cliente"
//         required
//       />
//     </div>
//   );
// };

// export default Cliente;
