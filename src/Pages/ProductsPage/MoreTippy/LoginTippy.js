import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import classes from './LoginTippy.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { fontGrid } from '@mui/material/styles/cssUtils';
import BookIcon from '@mui/icons-material/Book';

const LoginTippy = () => {
  return (
    <div className={classes.Main}>
      <div className={classes['in-div']}>
        <h6 className={classes.login}>New customers?</h6>
        <h6 className={classes.signUp}>Sign Up</h6>
      </div>
      <hr />
      <div className={classes['in-div']}>
        <AccountCircleIcon color='primary' sx={{fontSize: 20}} />
        <p>My Profile</p>
      </div>
      <hr />
      <div className={classes['in-div']}>
        <img
          color='primary'
          width="20"
          height='20'
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
          alt=""
        />
        <p>Filpkart Plus Zone</p>
      </div>
      <hr />
      <div className={classes['in-div']}>
        <BookIcon  color='primary' sx={{fontSize: 20}}/>
        <p>Orders</p>
      </div>
      <hr />
      <div className={classes['in-div']}>
        <FavoriteIcon color='primary' sx={{fontSize: 20}} />
        <p>Wishlist</p>
      </div><hr />
      <div className={classes['in-div']}>
        <ConfirmationNumberIcon color='primary' sx={{fontSize:20}} />
        <p>Rewards</p>
      </div>
      <hr />
      <div className={classes['in-div']}>
        <AccountBalanceWalletIcon color='primary' sx={{fontSize: 20}} />
        <p>Gift Cards</p>
      </div>
    </div>
  )
}

export default LoginTippy
