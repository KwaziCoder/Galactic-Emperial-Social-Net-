import React from 'react';
import classes from './Profile__title.module.css'

const Profile__title = () => {
  return (
    <div className={classes.profile__title}>
      <div className={classes.profile__name}>StormTrooper FN555</div>
      <div className={classes.profile__status}>Rebels will be vanished!!11!!</div>
    </div>
  )
}

export default Profile__title;