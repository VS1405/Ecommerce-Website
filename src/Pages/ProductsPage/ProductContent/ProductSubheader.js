import React from 'react'
import classes from './ProductSubHeader.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductSubheader = () => {
  return (
    <div className={classes.Main}>
      <div className={classes['in-div']}>
        <p>Electronic</p>
        <ExpandMoreIcon color='disabled'/>
        </div>
      <div className={classes['in-div']}>
        <p>TVs & Appliances</p>
         <ExpandMoreIcon color='disabled'/>
      </div>
      <div className={classes['in-div']}>
        <p>Men</p>
        <ExpandMoreIcon color='disabled'/>
      </div>
      <div className={classes['in-div']}>
        <p>Men</p>
        <ExpandMoreIcon color='disabled'/>
      </div>
      <div className={classes['in-div']}>
        <p>Baby & kids</p>
        <ExpandMoreIcon color='disabled'/>
        </div>
      <div className={classes['in-div']}>
        <p>Home & Furniture</p>
        <ExpandMoreIcon color='disabled'/>
      </div>
      <div className={classes['in-div']}>
        <p>Sports, Books & More</p>
        <ExpandMoreIcon color='disabled'/>
        </div>
      <div className={classes['in-div']}>
        <p>Flights</p>
      </div>
      <div className={classes['in-div']}>
        <p>Offer Zone</p>
        </div>
    </div>
  )
}

export default ProductSubheader
