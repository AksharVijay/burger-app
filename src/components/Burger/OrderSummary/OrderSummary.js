import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';
const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient).map(igKey =>{
        return (
        <li key ={igKey}> 
            <span style ={{textTransform : 'capitalize'}}> {igKey} </span>: {props.ingredient[igKey]} 
        </li>
        );
    })

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicous burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Please checkout now</p>
            <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
            <Button btnType ="Danger" clicked = {props.purchCancel}>Cancel</Button>
            <Button btnType ="Success" clicked = {props.purchContinue}>Continue</Button>
        </Aux>
        
    );
}

export default OrderSummary;