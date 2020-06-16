import React from 'react';
import Cssclasses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return(
        <header className ={Cssclasses.Toolbar}>
            <div>Menu</div>
            <div className={Cssclasses.Logo}>
                <Logo/>
            </div>
          
            <nav className={Cssclasses.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );

}

export default toolbar;