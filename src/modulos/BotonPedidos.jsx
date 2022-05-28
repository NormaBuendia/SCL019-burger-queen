import React from 'react'
import { Link } from 'react-router-dom';

const BotonPedidos = () => {
  return (
    <div>
        <Link to="/Pedidos">
          <button className="pedidos btn btn-lg btn-warning ">Pedidos</button>
        </Link>
       
        
        </div>
  )
}

export default BotonPedidos