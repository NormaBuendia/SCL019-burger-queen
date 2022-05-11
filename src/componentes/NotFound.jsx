import React from "react";
import pilonAnimado from '../img-jsx/pilonAnimado.gif'

export default function NotFound(){
    return(
        <div>
            <h1> Not Found </h1>
            <img src={pilonAnimado} className="pilonAimado" alt="pilon_animado"></img>
        </div>
    )
}