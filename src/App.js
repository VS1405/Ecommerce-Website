import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartProvider from './Store/CartProvider';
import MainPage from './Comp/Layouts/MainPage';
import StorePage from './Pages/Store/StorePage';
import AboutPage from './Pages/About/AboutPage';
import Contact from './Pages/ContactPage/Contact';

function App() {

  const router = createBrowserRouter([
    {path : '/', element: <MainPage />},
    {path : '/About', element: <AboutPage />},
    {path: '/Store', element: <StorePage />},
    {path: '/Contact', element: <Contact />}
  ])


  return (
    <CartProvider>
      <RouterProvider router={router}/>
      
    </CartProvider>
  );
}

export default App;
