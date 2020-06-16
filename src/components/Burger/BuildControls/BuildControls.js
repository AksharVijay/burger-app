import React from 'react';
import Cssclasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
    {label : 'Salad', type : 'salad'},
    {label : 'Meat', type: 'meat'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
]

const buildControls = (props) => {
    return(
        <div className ={Cssclasses.BuildControls}>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
        {control.map(ctrl => (
            <BuildControl key ={ctrl.label} label = {ctrl.label} 
            added ={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled ={props.disabled[ctrl.type]}/>
        ))}
        <button className={Cssclasses.OrderButton} disabled= {!props.purchase} onClick = {props.ordered}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;