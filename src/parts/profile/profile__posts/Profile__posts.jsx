import React from 'react';
import classes from './Profile__posts.module.css'
import Post from './../../post/Post'

const Profile__posts = () => {
  return (
    <div className={classes.profile__posts}>
        <Post message="Oh, no! Our Death Star is destroyed!(((((("/>
        <Post message="Haha! We have taken over the base of rebels on Hot! Suck, bitches!!!"/>
        <Post message= "REtreAAAt!!!! FFFFUUUUUCCCKKKKKK!!!!!"/>   
    </div>
  )
}

export default Profile__posts;