import React from 'react';
import CartContext from './Cart-context';



const cartContext= {
    items: '',
    price: 0,
    addItem : ()=>{},
    removeItem: ()=>{}
}

const CartProvider = (props) => {
  return (
    <CartContext.Provider  value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
