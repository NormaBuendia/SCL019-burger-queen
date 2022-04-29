import React from 'react'
import { Link } from 'react-router-dom'



const Boton = () => {
    //Aquí va la lógica
    
  return (
    <div className="content-Button">
       <Link to='/mesa'> <button className='btnMesa'>Mesa</button> </Link> 
       <Link to='/cocina'> <button className='btnCocina'>Cocina</button> </Link> 
      
    </div>
  )
}

export default Boton