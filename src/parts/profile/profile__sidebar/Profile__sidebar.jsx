import React from 'react';
import classes from './Profile__sidebar.module.css'

const Profile__sidebar = () => {
  return (
    <div className={classes.profile__sidebar}>
        <ul className={classes.profile__features}>
          <a href='#' className={classes.profile__feature}>About</a>
          <a href='#' className={classes.profile__feature}>Interests</a>
          <a href='#' className={classes.profile__feature}>Music</a>
          <a href='#' className={classes.profile__feature}>Photos</a>
          <a href='#' className={classes.profile__feature}>Videos</a>
        </ul>
    </div>
  )
}

export default Profile__sidebar;