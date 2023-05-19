import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import GetAppIcon from '@mui/icons-material/GetApp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import classes from './MoreTippy.module.css'
import 'tippy.js/themes/light.css'

const MoreTippy = () => {
  return (
    <>
    <div className={classes.moreDetail}>
      <div className={classes['in-div']}>
        <NotificationsIcon sx={{fontSize: 20}} color='primary'/>
        <p>Notifications Preferences</p>
      </div> 
      <hr/> 
      <div className={classes['in-div']}>
      < LiveHelpIcon sx={{fontSize: 20}} color='primary'/>
        <p>24 7 Customer Care</p>
      </div>  
      <hr/>
      <div className={classes['in-div']}>
        <TrendingUpIcon sx={{fontSize: 20}} color='primary'/>
        <p>Adverrtise</p>
      </div>  
      <hr/>
      <div className={classes['in-div']}>
        <GetAppIcon sx={{fontSize: 20}} color='primary'/>
        <p>Download App</p>
      </div>  
    </div>
    </>
  )
}

export default MoreTippy
