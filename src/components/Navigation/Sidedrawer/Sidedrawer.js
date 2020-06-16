import React from 'react';
import Cssclasses from './Sidedrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxillary';

const sidedrawer = (props) => {
    // let attachedClasses = [Cssclasses.Sidedrawer, Cssclasses.Close];
    // if(props.Open){
    //     attachedClasses = [Cssclasses.Sidedrawer, Cssclasses.Open]

    // }
    return(
        <Aux>
            <Backdrop show ={props.open} Clicked ={props.closed}/>
                <div className={Cssclasses.Sidedrawer}>
                    <div className={Cssclasses.Logo}>
                        <Logo/>
                    </div>
                    
                    <nav className ={Cssclasses.DesktopOnly}>
                        <NavigationItems/>
                    </nav>
                </div>
        </Aux>
    );

}

export default sidedrawer;