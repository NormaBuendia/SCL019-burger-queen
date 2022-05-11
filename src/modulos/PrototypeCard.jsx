import React from 'react'
import PropTypes from 'prop-types'

//realizo mi prototypo
const PrototypeCard=({product, click}) => (
<div className='card' onClick={()=> click(product)}>
<p className='price'>{`$ ${ product.price} .000`} </p>
<p  className='name'>{ product.name} </p>
</div>

);

  PrototypeCard.prototype ={
  product:{
    id:PropTypes.number,
    name:PropTypes.string,
    price:PropTypes.number,
    
  },

};
 

export default PrototypeCard