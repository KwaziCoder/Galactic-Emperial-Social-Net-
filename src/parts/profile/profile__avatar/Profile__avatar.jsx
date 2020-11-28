import React from 'react';
import {avatar} from './../../../theme/images'
import classes from './Profile__avatar.module.css'

const Profile__avatar = () => {
  return (
    <div className={classes.profile__avatar}>
      <div className={classes.profile__photoWrapper}>
        <img src={avatar} className={classes.profile__photo} />
      </div>
    </div>
  )
}

export default Profile__avatar;