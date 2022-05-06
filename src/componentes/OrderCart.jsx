import React, { useReducer } from 'react'
import { orderReducer } from './reducers/OrderReducers'

const orderCart = () => {
    const [state, dispatch] = useReducer(orderReducer, second, third)
  return (
    <div>
        <h2>Orden</h2>
        <article className='box'></article>
        <hr>Carrito</hr>
        <article className='box'></article>
    </div>
  )
}

export default orderCart