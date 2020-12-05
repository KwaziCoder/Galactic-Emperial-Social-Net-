import React from 'react';
import classes from './Profile__posts.module.css'
import Post from './../../post/Post'



const Profile__posts = (props) => {
  return (
    <div className={classes.profile__posts}>
      {props.posts.map( p => <Post message={p.message} likes={p.likes}/>)}  
    </div>
  )
}

export default Profile__posts;