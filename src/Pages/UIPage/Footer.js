// footer page commonly used

import React from 'react'
import classes from './Footer.module.css'


const Footer = () => {
  return (
    <footer className={classes.footer}>
    <div className={classes['footer-title']}>
        <h2>The Generics</h2>
    </div>
    <ul className={classes['footer-icons']}>
        <li>
            <a href='https://www.youtube.com/'>
                <img src='https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg'
                    alt='YouTube' />
            </a>
        </li>
        <li>
            <a href='https://spotify.com/'>
                <img src='https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png'
                    alt='spotify' />
            </a>
        </li>
        <li>
            <a href='https://facebook.com/'>
                <img src='https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png'
                    alt='facebook' />
            </a>
        </li>
    </ul>
</footer>

  )
}

export default Footer
