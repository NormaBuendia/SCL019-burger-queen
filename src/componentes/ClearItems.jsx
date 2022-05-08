import React from 'react'
import clear from '../img-jsx/clear.png'



function ClearItems({ keys, rest }) {
    return (
        <figure onClick={() => rest(keys)}>

            <img id="iconClear" src={clear}></img>

        </figure>
    );
    }
export default ClearItems;