import React from 'react';
import classes from './Post.module.css'
import {miniAvatar} from './../../theme/images'



const Post = () => {
  return (
    <div className={classes.post}>
      <img src={miniAvatar} className={classes.post__avatar}/>
      <div className={classes.post__text}>Haha! We have taken over the base of rebels on Hot! Suck, bitches!!!</div>
    </div>
  )
}

export default Post;