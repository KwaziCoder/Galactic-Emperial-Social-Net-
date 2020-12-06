import React from 'react';
import classes from './Profile__posts.module.css'
import Post from './../../post/Post'



const Profile__posts = (props) => {

  let posts = props.posts.map( p => <Post message={p.message} likes={p.likes}/>);
  
  return (
    <div className={classes.profile__posts}>
      {posts}  
    </div>
  )
}

export default Profile__posts;