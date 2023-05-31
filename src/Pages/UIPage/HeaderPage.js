import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './HeaderPage.module.css'


const HeaderPage = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName={classes.active} className='nav-link active'>Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName={classes.active} className='nav-link active'>About</NavLink>
            </li>
            <li>
              <NavLink to="/Login" activeClassName={classes.active} className='nav-link active'>Login</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className='nav-link active'>Contact Us</NavLink>
            </li>
            
          </ul>
        </nav>

      </header>
    </Fragment>
  )
}

export default HeaderPage;
