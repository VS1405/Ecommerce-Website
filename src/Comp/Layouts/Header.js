import React, { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
            <NavLink to="/" activeclassname={classes.active} >Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" activeclassname={classes.active} >About</NavLink>
            </li>
            <li>
              <NavLink to="/Login" activeclassname={classes.active} >Login</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeclassname={classes.active} >Contact Us</NavLink>
              </li>
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
