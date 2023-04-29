import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css'


const HeaderPage = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
            <Link to="/" className='nav-link active'>Home</Link>
            </li>
            <li><Link to="/Store" className='nav-link active'>Store</Link></li>
            <li><Link to="/About" className='nav-link active'>About</Link></li>
          </ul>
        </nav>
       
      </header>
    </Fragment>
  )
}

export default HeaderPage;
