import React from 'react';
import classes from './Post.module.css'
import {miniAvatar} from './../../theme/images'



const Post = (props) => {
  return (
    <div className={classes.post}>
      <img src={miniAvatar} className={classes.post__avatar}/>
      <div className={classes.post__text}>{props.message}</div>
    </div>
  )
}

export default Post;