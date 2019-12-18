import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const burger = (props) => {

    // convert object of ingredients:count pairs to array of JSX elements
    const transformedIngredients =
        Object.keys(props.ingredients)
            .map(ingredientKey => {
                return [...Array(props.ingredients[ingredientKey])]
                    .map((_, i) => {
                        return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                    });
            });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;