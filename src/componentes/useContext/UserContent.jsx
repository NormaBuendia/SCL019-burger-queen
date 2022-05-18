import { createContext, useState } from "react";
import React from 'react';

export const  UserContent = createContext();

export const UseStates = ({children}) =>{
    const [cart, setCart] = useState([]);
    const [cliente, setCliente] = useState('');
    const [orden, setOrden] = useState([]);
    // const [spanColor, setSpanColor] = useState(false)

    return (
        <UserContent.Provider value = {{cart, setCart, cliente, setCliente, orden, setOrden}}>
            {children}
        
        
        </UserContent.Provider>
    
       
        )
};