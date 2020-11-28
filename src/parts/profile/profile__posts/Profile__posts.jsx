import React from 'react';
import classes from './Profile__posts.module.css'
import Post from './../../post/Post'

const Profile__posts = () => {
  return (
    <div className={classes.profile__posts}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        
    </div>
  )
}

export default Profile__posts;