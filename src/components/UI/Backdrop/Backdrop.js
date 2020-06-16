import React from 'react';
import Cssclasses from './Backdrop.css'

const backdrop = (props) => {
    return(
        props.show ? <div className ={Cssclasses.Backdrop} onClick ={props.Clicked}></div> : null
    );
}

export default backdrop;