import React, { useState } from 'react';
import Header from './Component/Layout/Header/Header';
import Item from './Component/ItemList/Item';

import CartProvider from './Store/CartProvider';
import Cart from './Component/Layout/Header/Cart/Cart'

function App() {

  const [showCart, setShowCart] = useState(false);

  const ShowCartHandler = () => setShowCart(true)
  const HideCartShownHandler = () => setShowCart(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose={HideCartShownHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <Item />

    </CartProvider>
  );
}

export default App;
