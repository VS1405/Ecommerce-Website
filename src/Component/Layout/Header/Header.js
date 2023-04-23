import React, { useState, Fragment } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
            <Nav.Link href="#home" className='nav-link active'>Home</Nav.Link>
            </li>
            <li><Nav.Link href="#store" className='nav-link active'>Store</Nav.Link></li>
            <li><Nav.Link href="#about" className='nav-link active'>About</Nav.Link></li>
          </ul>
        </nav>
        <div className={classes.button}>
            <HeaderCartButton onClicked={props.onShowCart}/>
            </div>
      </header>
    </Fragment>
  )
}

export default Header;
