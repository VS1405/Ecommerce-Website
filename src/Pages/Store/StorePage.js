import React, {useState} from 'react';
import Header from '../../Comp/Layouts/Header';
import Cart from '../../Comp/Cart/Cart';
import AvailableItem from '../../Comp/Item/AvailavbleItem';

const StorePage = () => {
  
  const [showCart, setShowCart] = useState(false);

  const ShowCartHandler = () => setShowCart(true)
  const HideCartShownHandler = () => setShowCart(false);

  return (
    <div>
      {showCart && <Cart onClose={HideCartShownHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <AvailableItem />
    </div>
  )
}

export default StorePage
