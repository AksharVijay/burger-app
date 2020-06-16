import React from 'react';
import Cssclasses from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return(
        <div >
            <ul className={Cssclasses.NavigationItems}>
                <NavigationItem link ="/" active>Burger Builder</NavigationItem>
                <NavigationItem link ="/"> Checkout</NavigationItem>
            </ul>
        </div>
    );
}

export default navigationItems;