import React from 'react';
import Cssclasses from './BuildControl.css';

const buildControl = (props) => {
    return(
    <div className ={Cssclasses.BuildControl}>
        <div className = {Cssclasses.Label}>
            {props.label}
        </div>
        <button className={Cssclasses.Less} onClick = {props.removed} disabled ={props.disabled}>Less</button>
        <button className={Cssclasses.More} onClick = {props.added}>More</button>
    </div>
    );

}

export default buildControl;