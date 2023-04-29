import React, {Fragment, useContext} from 'react';
import { Button, Col, Image } from 'react-bootstrap'
import classes from './CartsItem.module.css'
import CartContext from '../../Store/Cart-context';


const CartItems = (props) => {

  const price = `$${props.price.toFixed(2)}`;

 

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
