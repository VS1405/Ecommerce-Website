import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'react-bootstrap'
import classes from './Modal.module.css'

const Backdrop = props => {
    return <div />
    
}

const ModalOverlay = props => {
    return <Fragment>
         <div >
           <div className={classes.content}>{props.children}</div>
        </div>
    </Fragment>
}

const portalElement = document.getElementById("overlay")
const ModalCart = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            
        </Fragment>
    )
}

export default ModalCart;
