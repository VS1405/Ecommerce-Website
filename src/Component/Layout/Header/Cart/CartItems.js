import React, {Fragment} from 'react';
import { Button, Col, Image } from 'react-bootstrap'
import classes from './CartsItem.module.css'



const CartItems = (props) => {

  const price = `$${props.price.toFixed(2)}`;

  return (
    <Fragment>
      <Col>
        <div className={classes.div}>
          <div>
            <Image src={props.image} alt='Color Images' width={100} />
          </div>
          <span>{props.title}</span>
          <span>{price}</span>
          <span>1</span>
          <Button variant='danger'>Remove</Button>
        </div>
      </Col>
    </Fragment>
  )
}

export default CartItems
