import React from 'react'
import { Link } from 'react-router-dom'



const Boton = () => {
  
    
  return (
    <div className="content-Button">
       <Link to='/views/mesa'> <button className='btnMesa'>Mesa</button> </Link> 
       <Link to='/views/cocina'> <button className='btnCocina'>Cocina</button> </Link> 
   </div>
  )
}

export default Boton