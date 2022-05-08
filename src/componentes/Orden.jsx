import React, {useContext} from 'react';
import AddItems from './AddItems';
import ClearItems from './ClearItems';
import DeleteItems from './DeleteItems';
import { UserContent } from './userContext/UserContent'

const Orden = () => {
    let numberOrder = 1;
    const { cart, setCart } = useContext(UserContent);


    const removeCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }


    // const addCant = (id) => {
    //     const arrCard = cart.map((item) =>
    //         item.id === id ? { ...item, cant: item.cant + 1 } : item
    //     );
    //     setCart(arrCard);
    // }

    const restCant = (id) => {
        const arrCard = cart.map((item) => { 
        if(item.cant>1){
         return    item.id === id ? { ...item, cant: item.cant - 1 } : item

        }else{
         return   item.id === id ? { ...item, cant: 1 } : item

        }

    });
        setCart(arrCard);
    }


    
    let subTotal = 0;
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.cant, subTotal);


    return (
        <section key={numberOrder}>

            <article className='d-flex align-items-start'>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Cantidad</th>
                                {/* <th scope="col">Añadir</th> */}
                                <th scope="col">Reducir</th>
                                <th scope="col">Producto</th>
                                <th scope="col">$</th>
                                <th scope="col">Borrar</th>
                            </tr>
                        </thead>


                        {cart.map(element => {
                            return (
                                <tbody>
                                    <tr key={element.id}>
                                        <th scope='row'> {element.cant}</th>
                                        {/* <th> <AddItems
                                            keys={element.id}
                                            add={addCant}
                                        /></th> */}
                                        <th className='reset'> <ClearItems
                                            keys={element.id}
                                            rest={restCant}
                                        /></th>

                                        <td>{element.name}</td>
                                        <td>$ {element.price}</td>
                                        <td onClick={() => removeCart(element.id)}><DeleteItems /></td>
                                    </tr>

                                </tbody>

                            )

                        })}

                    </table>
                </div>
            </article>
                 <article className="div">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          
                        </tr>
                    </thead>
                    <tbody>
                      
                        <tr key={total}>
                            <th scope="row">Total</th>
                            <td colSpan="2"></td>
                            <td>$ {total}</td>
                        </tr>
                    </tbody>
                </table>
            </article>

        </section>
    );
}

export default Orden;