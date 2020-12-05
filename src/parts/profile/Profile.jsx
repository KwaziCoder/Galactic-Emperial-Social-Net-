import React from 'react';
import classes from './Profile.module.css'
import Profile__avatar from './profile__avatar/Profile__avatar'
import Profile__posts from './profile__posts/Profile__posts'
import Profile__sidebar from './profile__sidebar/Profile__sidebar'
import Profile__title from './profile__title/Profile__title'




const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.profile__avatar}><Profile__avatar/></div>
      <div className={classes.profile__title}><Profile__title/></div>
      <div className={classes.profile__sidebar}><Profile__sidebar/></div>
      <div className={classes.profile__posts}><Profile__posts posts={props.posts}/></div>
    </div>
  )
}

export default Profile;