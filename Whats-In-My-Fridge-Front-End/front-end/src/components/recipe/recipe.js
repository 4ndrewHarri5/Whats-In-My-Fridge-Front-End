import React from 'react';
import RecipeStyle from'./recipe.css'

const recipe = (props) => {
    return (
        <div className={RecipeStyle.Recipe}>
            <img src={props.image} alt="new" />
            <p onClick={props.click} >{props.name}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default recipe;