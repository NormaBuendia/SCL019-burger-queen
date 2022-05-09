import React, {useContext} from 'react';
import RestItems from './RestItems';
import DeleteItems from './DeleteItems';
import { UserContent } from './userContext/UserContent'
import Menu from './Menu';

const Orden = () => {
    let ordenCart = 1;
    const { cart, setCart } = useContext(UserContent);


    const removeCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    }


       const rest = (id) => {
        const cartArray = cart.map((item) => { 
        if(item.cant > 1){
         return    item.id === id ? { ...item, cant: item.cant - 1 } : item

        }else{
         return   item.id === id ? { ...item, cant: 1 } : item

        }

    });
        setCart(cartArray);
    }


    
    let subTotal = 0;
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.cant, subTotal);


    return (
        <section className="section" key={ordenCart}>
           <div className="ordenCont">
            <article className='d-flex align-items-start'>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Reducir</th>
                                {/* <th scope="col">Añadir</th> */}
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
                                        <th className='reset'> <RestItems
                                            keys={element.id}
                                            rest={rest}
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
            </div>

        </section>
    );
}

export default Orden;