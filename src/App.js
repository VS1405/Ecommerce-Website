import React, { useState } from 'react';
import Header from './Component/Layout/Header/Header';
import Item from './Component/ItemList/Item';
import Cart from './Component/Cart/Cart';

function App() {

  const [showCart, setShowCart] = useState(false);

  const ShowCartHandler =()=> setShowCart(true)
const HideCartShownHandler =()=> setShowCart(false)
  return (
    <>
     {showCart && <Cart onClose={HideCartShownHandler}/>}
      <Header onShowCart={ShowCartHandler} />
      <Item />

    </>
  );
}

export default App;
