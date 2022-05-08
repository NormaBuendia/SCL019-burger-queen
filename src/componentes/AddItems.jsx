import React from 'react';
import add from '../img-jsx/add.png'

function AddItems({ keys, rest }) {
    return (
        <figure onClick={() => rest(keys)}>

            <img id='iconAdd' src={add}></img>

        </figure>
    );
}

export default AddItems;