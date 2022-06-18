import { createContext, useState } from "react";
import React from 'react';
//Context proporciona una forma de compartir valores  entre 
//componentes sin tener que pasar explícitamente una prop a través de cada nivel del árbol.
export const  UserContent = createContext();

export const UseStates = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [cliente, setCliente] = useState("");
    const [orden, setOrden] = useState([]);
    // console.log(UseStates + "hola")
    // console.log(children)

    return (
        <UserContent.Provider value = {{cart,setCart, cliente,setCliente, orden, setOrden}}>{children}</UserContent.Provider>
        )
      
};