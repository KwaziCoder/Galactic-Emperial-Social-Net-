import React from 'react';
import {NavLink} from 'react-router-dom'
import {logo} from './../../theme/images'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__menu}>
        <div className={classes.header__menuBlock}><NavLink to='/news' className={classes.header__menuCategory} activeClassName={classes.active}>News</NavLink></div>
        <div className={classes.header__menuBlock}><NavLink to='/subscriptions' className={classes.header__menuCategory} activeClassName={classes.active}>Subscriptions</NavLink></div>
        <div className={classes.header__logo}>
          <img src={logo} className={classes.header__logoImg} />
        </div>
        <div className={classes.header__menuBlock}><NavLink to='/profile' className={classes.header__menuCategory} activeClassName={classes.active}>My profile</NavLink></div>
        <div className={classes.header__menuBlock}><NavLink to='/messanger' className={classes.header__menuCategory} activeClassName={classes.active}>Messages</NavLink></div>    
      </div>
    </header>
  )
}

export default Header;