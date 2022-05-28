import React,{useContext} from 'react'
import { UserContent } from "./userContext/UserContent";
const Orden = () => {
    const { orden, setOrden} = useContext(UserContent);
  return (
    <div className="orden-block">
    <input
      onChange={(e) => setOrden(e.target.value)}
      value={orden}
      type="number" min="1" max="15"
      placeholder="numero de mesa"
      className="cliente"
      required
    />
  </div>
  )
}

export default Orden