import React, { useContext, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import CartItems from './CartItems';
import ModalCart from '../UI/ModalCart';
import classes from './Cart.module.css';
import CartContext from '../../Store/Cart-context';
import axios from 'axios'
import AuthContect from '../../Pages/Login/store/auth-context';

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

    const cartCtx = useContext(CartContext);
    const TotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasProduct = cartCtx.title.length > 0

    const [cartItems, setCartItems] = useState([]);

    const AuthCtx = useContext(AuthContect)

    const Removehandler = async (id) => {
        cartCtx.removeItem(id);
        try {
            await axios.delete(`https://crudcrud.com/api/42e9545f6c4b4f36a17aeb75c7f93fbb/cartItems/${id}`);
            console.log('Item deleted from cart:', id);
        }
        catch (error) {
            console.error('Error deleting item from cart:', error);
            if (error.response) {
                console.log('Response data:', error.response.data);
                console.log('Response status:', error.response.status);
                console.log('Response headers:', error.response.headers);
            }
        }
    };

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(
                    'https://crudcrud.com/api/7e580cbf3eb0490d96d570d2e0f287e7/cartItems'
                );
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        // Fetch cart items only when user is logged in
        if (AuthCtx.isLoggedIn) {
            fetchCartItems();
        } else {
            // Set cart items to empty array when user is not logged in
            setCartItems([]);
        }
    }, [AuthCtx.isLoggedIn]);

    

    const cartItemList = <ul>
        {cartCtx.title.map((item) => (
            <li>
                <Row>
                    <CartItems
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        amount={item.amount}
                        onRemove={Removehandler.bind(null, item.id)}
                    />
                </Row>
            </li>
        )
        )}
    </ul>

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
                {/* list of cart items */}
                {cartItemList}

                <div className={classes.total}>
                    <span>Total</span>
                    <div>{TotalAmount}</div>
                </div>

                <button className={classes.button} >
                    PURCHASE
                </button>

            </div>
        </ModalCart>

    )
}

export default Cart
