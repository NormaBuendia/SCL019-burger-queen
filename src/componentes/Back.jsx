import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../src/img-jsx/back.png'

const Back = () => {
    //Aquí va la lógica
    
  return (
    <div className="content-ButtonBack">
       <Link to='/'>
           <img src={back} className="backBtn"></img>
           </Link> 
            
    </div>
  )
}



export default Back