import React from 'react';
import './recipe.css'

const recipe = (props) => {
    return (
        <div className='Recipe' >
            <img src={props.image} alt="new" />
            <p onClick={props.click} >{props.name}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default recipe;