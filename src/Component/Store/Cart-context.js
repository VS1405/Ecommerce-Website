import React from 'react'

const CartContext = ()=> React.createContext({
    items : [],
    price: 0,
    addItem : (items)=>{},
    removeItem : (id)=>{}
});

export default CartContext;