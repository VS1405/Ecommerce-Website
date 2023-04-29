// Home page of website with tours

import React, {useState} from 'react';
import FooterHeadline from '../../Pages/UIPage/FooterHeadline';
import HeaderPage from '../../Pages/UIPage/HeaderPage';
import Home from '../../Pages/HomePage/Home';

const MainPage = () => {

  return (
    <div>
      <HeaderPage/>
      <Home />
      <FooterHeadline />
    </div>
  )
}

export default MainPage
