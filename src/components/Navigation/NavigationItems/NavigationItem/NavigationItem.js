import React from 'react';
import Cssclasses from './NavigationItem.css';

const navigationItem = (props) => {
    return(
        <li className={Cssclasses.NavigationItem}>
            <a href ={props.link}
            className ={props.active ? Cssclasses.active : null}>
                {props.children}
            </a>
        </li>
    );
}

export default navigationItem;