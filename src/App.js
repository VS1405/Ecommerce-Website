import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Comp/Layouts/Header';
import AvailableItem from './Comp/Item/AvailavbleItem';
import Cart from './Comp/Cart/Cart';
import CartProvider from './Store/CartProvider';
import MainPage from './Comp/Layouts/MainPage';
import StorePage from './Pages/Store/StorePage';
import AboutPage from './Pages/About/AboutPage';

function App() {

  const router = createBrowserRouter([
    {path : '/', element: <MainPage />},
    {path : '/About', element: <AboutPage />},
    {path: '/Store', element: <StorePage />}
  ])


  return (
    <CartProvider>
      <RouterProvider router={router}/>
      
    </CartProvider>
  );
}

export default App;
