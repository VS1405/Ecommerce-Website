import React, {Fragment} from 'react'
import { Container, Col, Offcanvas, Row } from 'react-bootstrap';
import CartItems from './CartItems';
import ModalCart from '../UI/ModalCart';
import classes from './Cart.module.css'
const cartElements = [
    {
        id: '01',
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2
    },
    {
        id: '02',
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3
    },
    {
        id: '03',
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1
    }
]
const Cart = (props) => {

    const cartItemList = cartElements.map((item) => (
        <Row>
            <CartItems
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.imageUrl}
                quantity={item.quantity}

            />
        </Row>
    )
    )

    return (
            <ModalCart onClose={props.onClose}>
                <div className={classes.overlay}>
                    <span className={classes.title}>CART</span>
                    <button className={classes.delete} onClick={props.onClose}>
                        X
                    </button>
                    <div className={classes.heading}>
                        <span className={classes.item}>ITEM</span>
                        <span className={classes.price}>PRICE</span>
                        <span className={classes.quantity}>QUANTITY</span>
                    </div>
                    {cartItemList}
                    <div className={classes.total}>
                        <span>Total</span>
                        <div>$</div>
                    </div>
                   
                        <button className={classes.button} >
                            PURCHASE
                        </button>
                </div>
            </ModalCart>

    )
}

export default Cart
