import React from 'react'
import eliminar from "../img/eliminar.png"
//import { IconName } from "react-icons/bs";

function Delete() {
  return (
   <figure>

     <img className = 'logo-basura' src={eliminar }alt="iconEliminar" />
   </figure>
  )
}

export default Delete