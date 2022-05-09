import React from 'react'
import restItem from '../img-jsx/rest.png'



function ClearItems({ keys, rest }) {
    return (
        <figure onClick={() => rest(keys)}>

            <img id="iconRest" src={restItem}></img>

        </figure>
    );
    }
export default ClearItems;