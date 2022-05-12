import React from 'react'

const OrdenPedido = ({orden, setOrden}) => {
  return (

    <div>
       <input onChange={(e)=>setOrden(e.target.value)} value={orden} type="number" placeholder="ordenPedido" className="orden" required />
        </div>
  )
}

export default OrdenPedido