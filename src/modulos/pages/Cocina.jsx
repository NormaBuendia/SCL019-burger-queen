import React, { useEffect, useState } from 'react';
import Header from '../Header'
import logo from "../img/Logotipo1.png";
import { slideInUp } from "react-animations";
import { getOrders} from '../Firebase/function.js';



function Cocina() {
    
    const [orders, setOrders] = useState([]);

// la funcion que se va a ejecutar para traer los pedidos de FS, recibe 2 argumentos
// el primer argumento es una funcion y esa, es la que queremos que se ejecute como un efecto secundario, y eso va a ocurrir cuando se cargue
// la pagina, cuando carguemos el documento por primera vez, useEffects se va a ejecutar


useEffect(() => {
    
    const getOrdersData = async () => {
      const pedidos = await getOrders();
      //console.log(pedidos)
        setOrders(pedidos.docs);
    } 
   // console.log(getOrdersData);

        getOrdersData();
    }, []);
    console.log(orders);


    return (
        <div className="app">
            <div className="cont">
            <Header img={logo} alt="logo" animationType={slideInUp} />
            </div>
            <div className="orders-cocina">
              
                       
                        {orders.map(element => {
                            
                            return (
                                <div className='orders-pedidos btn btn-warning'>
                                      <p className="">Cliente : {element.data().Cliente}</p>
                                      
                                    {element.data()?.Pedido?.map(item => {
                                        return (
                                            
                                                        <li> 
                                                     {item.cant} -
                                                    {item.name}
                                                        </li>
                                                   

                                              
                                        );
                                    })}
                                   
                                    <ul><button className='btn btn-warning mr-1 boton-status'>Status</button></ul>
                                </div>
                            )
                        })}
                
            </div>
            
        </div>
    );


}


export default Cocina;




    // const changeStatus = async (element) => {
    //     console.log('elemento clicleado', element);
    //     const changeStatus = await changeStatusReady(element);
    // }