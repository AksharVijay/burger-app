import React from 'react';
import BurgerLogo from '../../assets/images/burgerLogo.png';
import Cssclasses from './Logo.css';

const logo = (props) => {
    return(

        <div className ={Cssclasses.Logo }>
            <img src={BurgerLogo} alt =""></img>
        </div>
    );
}

export default logo;