import React from 'react';
import {logo} from './../../theme/images'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__menu}>
        <div className={classes.header__menuBlock}><a href='#' className={classes.header__menuCategory}>News</a></div>
        <div className={classes.header__menuBlock}><a href='#' className={classes.header__menuCategory}>Subscriptions</a></div>
        <div className={classes.header__logo}>
          <img src={logo} className={classes.header__logoImg} />
        </div>
        <div className={classes.header__menuBlock}><a href='#' className={classes.header__menuCategory}>My profile</a></div>
        <div className={classes.header__menuBlock}><a href='#' className={classes.header__menuCategory}>Messages</a></div>    
      </div>
    </header>
  )
}

export default Header;