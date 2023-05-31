import React, {Fragment, useContext, useState, useEffect} from 'react';
import { Button, Col, Image } from 'react-bootstrap'
import classes from './CartsItem.module.css'
import CartContext from '../../Store/Cart-context';
import axios from 'axios'


const CartItems = (props) => {

  const price = `$${props.price.toFixed(2)}`;

  const [cartItems, setCartItems] = useState([]);

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
  
      fetchCartItems();
    }, [])


  return (
    <Fragment>
      <Col>
        <div className={classes.div}>
          <div>
            <Image src={props.imageUrl} alt='Color Images' width={100} />
          </div>
          <span>{props.title}</span>
          <span>{price}</span>
          <span>{props.amount}</span>
          <Button variant='danger' onClick={props.onRemove}>Remove</Button>
        </div>
      </Col>
    </Fragment>
  )
}

export default CartItems
