import React, {useEffect} from "react"
import { collection, getDocs } from "firebase/firestore"
import {db} from '../firebase-config'
import { async } from "@firebase/util"




export default function Pedidos (){

    useEffect(() => {
        
        const getDatos = async () => {
            
        const datosPedidos = await getDocs(collection(db, "Pedidos"))
        datosPedidos.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        })
        }

        getDatos()
    }, [])



   
    return (
        <div></div>
    )
}

