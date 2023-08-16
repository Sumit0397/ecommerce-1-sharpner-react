import React from 'react';
import classes from "./Modal.module.css";
import  ReactDOM  from 'react-dom';

const ModalOverlays = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.container}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
    return (
        ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays> , portalElement)
    )
}

export default Modal;