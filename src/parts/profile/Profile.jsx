import React from 'react';
import classes from './Profile.module.css'
import Avatar from './avatar/Avatar'
import Posts_container from './posts/Posts_container'
import Sidebar from './sidebar/Sidebar'
import Title from './title/Title'




const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.avatar}><Avatar/></div>
      <div className={classes.title}><Title/></div>
      <div className={classes.sidebar}><Sidebar/></div>
      <div className={classes.posts}><Posts_container/></div>
    </div>
  )
}

export default Profile;