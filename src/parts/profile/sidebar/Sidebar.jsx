import React from 'react';
import classes from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
        <ul className={classes.features}>
          <a href='#' className={classes.feature}>About</a>
          <a href='#' className={classes.feature}>Interests</a>
          <a href='#' className={classes.feature}>Music</a>
          <a href='#' className={classes.feature}>Photos</a>
          <a href='#' className={classes.feature}>Videos</a>
        </ul>
    </div>
  )
}

export default Sidebar;