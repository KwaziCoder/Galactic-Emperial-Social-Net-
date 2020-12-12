import React from 'react';
import {avatar} from '../../../theme/images'
import classes from './Avatar.module.css'

const Avatar = () => {
  return (
    <div className={classes.avatar}>
      <div className={classes.photoWrapper}>
        <img src={avatar} className={classes.photo} />
      </div>
    </div>
  )
}

export default Avatar;