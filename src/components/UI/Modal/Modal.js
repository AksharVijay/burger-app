import React from 'react';
import Cssclasses from './Modal.css';
import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return(
        <Aux>
            <Backdrop show ={props.show} Clicked ={props.ClosePurchaseModal}/>
            <div className ={Cssclasses.Modal}
                style ={{
                    transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    );

}

export default Modal;