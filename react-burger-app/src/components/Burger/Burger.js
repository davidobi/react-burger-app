import React from 'react';
import './Burger.css';
import BurgerIngerdient from './BurgerIngredient/BurgerIngerdient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngerdient key={igKey + i} type ={igKey} />;
        });
    });
    return (
        <div className='Burger'>
            <BurgerIngerdient type="bread-top" />
             {transformedIngredients}
            <BurgerIngerdient type="bread-bottom" />
        </div>
    );
};

export default burger;