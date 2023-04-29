import React, { useReducer } from 'react'
import CartContext from './Cart-context'

const defaultCart = {
  title: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {

    const updatedAmount = state.totalAmount + action.title.price * action.title.amount;

    const existingCartItemIndex = state.title.findIndex(
      (title) => title.id === action.title.id
    );
    const existingCartItem = state.title[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.title.amount
      }
      updatedItems = [...state.title]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    else {
      updatedItems = state.title.concat(action.title);
    }
    return {
      title: updatedItems,
      totalAmount: updatedAmount
    }
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.title.findIndex(
        (title) => title.id === action.id
    );
    const existingItem = state.title[existingCartItemIndex];
    const updatedTotalAmount= state.totalAmount - existingItem.price;

    let updatedItems;
    if(existingItem.amount === 1){
        updatedItems = state.title.filter(title => title.id !== action.id)
    }else{
      const updatedItem = {...existingItem, amount: existingItem.amount - 1}
      updatedItems = [...state.title];
      updatedItems[existingCartItemIndex] = updatedItem
    }
    return {
        title: updatedItems,
        totalAmount: updatedTotalAmount
    }
}
  return defaultCart
}

const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart)

  const addItemHandler = title => {
    dispatchCartAction({ type: 'ADD', title: title })
  };
  const removeItemHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  };

  const cartItem = {
    title: cartState.title,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartProvider
