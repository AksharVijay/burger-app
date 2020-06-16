import React from 'react';
import Cssclasses from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let Ingredient = null;
    switch (props.type) {
        case ('bread-bottom') :
            Ingredient = <div className = {Cssclasses.BreadBottom}></div>;
            break;
        case ('bread-top') :
            Ingredient = <div className = {Cssclasses.BreadTop}>
                            <div className ={Cssclasses.Seeds1}></div>
                            <div className ={Cssclasses.Seeds2}></div>
                        </div>
            break;
        case ('meat') :
            Ingredient = <div className ={Cssclasses.Meat}></div>;
            break;
        case ('cheese') :
            Ingredient = <div className ={Cssclasses.Cheese}></div>;
            break;
        case ('salad') :
            Ingredient = <div className ={Cssclasses.Salad}></div>;
            break;
        case ('bacon') :
            Ingredient = <div className ={Cssclasses.Bacon}></div>;
            break;
        default :
            Ingredient = null;
    }
        return Ingredient;

}

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}
export default burgerIngredient;