import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../src/img-jsx/back.png'

const Back = () => {
   
    
  return (
    <div className="content-ButtonBack">
       <Link to='/'>
           <img src={back} className="backBtn" alt='Back'></img>
           </Link> 
            
    </div>
  )
}



export default Back