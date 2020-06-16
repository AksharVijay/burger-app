import React from 'react';
import Cssclasses from './Button.css';

const button  = (props) => {
    return(
        <button className = {[Cssclasses.Button, Cssclasses[props.btnType]].join(' ')} onClick ={props.clicked}>
            {props.children}
        </button>
    );


}

export default button;