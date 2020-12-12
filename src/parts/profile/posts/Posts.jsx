import React from 'react';
import classes from './Posts.module.css'
import Post from '../../post/Post'



const Posts = (props) => {

  let posts = props.posts.map( p => <Post message={p.message} likes={p.likes}/>);
  
  return (
    <div className={classes.posts}>
      {posts}  
    </div>
  )
}

export default Posts;