import React from 'react';
import './Burger.css';
import BurgerIngerdient from './BurgerIngredient/BurgerIngerdient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngerdient key={igKey + i} type ={igKey} />;
        });
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients.</p>
    }    
    return (
        <div className='Burger'>
            <BurgerIngerdient type="bread-top" />
             {transformedIngredients}
            <BurgerIngerdient type="bread-bottom" />
        </div>
    );
};

export default burger;