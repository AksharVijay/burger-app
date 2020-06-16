import React from 'react';
import Cssclasses from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //Extracting the object into an array and dynamic
    let transformedIngredient =  Object.keys(props.ingredient).map( igKey => {
        return  [...Array(props.ingredient[igKey])].map((_, i) => {
            return <BurgerIngredient key ={igKey + i} type = {igKey}></BurgerIngredient>
        });
    })
    .reduce((arr, el) => { // to check if we have an ingredient or not.
        return arr.concat(el);
    }, []);
    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please add some ingredient</p>;
    }
    return (
        <div className = {Cssclasses.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type = "bread-bottom"/>

        </div>
    );
}

export default burger; 