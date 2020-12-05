import React from 'react';
import classes from './Profile__posts.module.css'
import Post from './../../post/Post'

let postsData = [
  {message: 'Oh, no! Our Death Star is destroyed!((((((', likes: 3},
  {message: 'Haha! We have taken over the base of rebels on Hot! Suck, bitches!!!', likes: 15},
  {message: 'REtreAAAt!!!! FFFFUUUUUCCCKKKKKK!!!!!', likes: 7},
];

let posts = postsData.map( p => <Post message={p.message} likes={p.likes}/>);

const Profile__posts = () => {
  return (
    <div className={classes.profile__posts}>
      {posts}  
    </div>
  )
}

export default Profile__posts;