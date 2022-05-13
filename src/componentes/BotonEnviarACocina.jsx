import React from 'react'
import sendOrder from './Orden'


const BotonEnviarACocina = () => {
  return (
    <div>
       
        <button className='btn btn-danger' id='btnEnviar' onClick={sendOrder}>Enviar Pedido</button>
    </div>
  )
}

export default BotonEnviarACocina