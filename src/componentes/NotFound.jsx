import React from "react";
import pilonAnimado from '../img-jsx/pilonAnimado.gif'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return(
        <div>
            <h1> Not Found </h1>
            <img src={pilonAnimado} className="pilonAimado" alt="pilon_animado"></img>
            <Link to='/'>
        <button className="btn-404">ir al Home</button>
           </Link> 
        </div>
    )
}