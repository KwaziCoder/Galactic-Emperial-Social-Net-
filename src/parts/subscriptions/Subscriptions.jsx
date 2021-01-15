import React from 'react'
import classes from './Subscriptions.module.css'
import { groupAvatar } from './../../theme/images'


let groups = [
  { id: 1, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 114, subscribed: false },
  { id: 2, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 114, subscribed: true },
  { id: 3, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 114, subscribed: false },
  { id: 4, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 114, subscribed: false },
];


const Subscriptions = (props) => {

  if (props.groups.length === 0) {
    props.setGroups(groups)
  }
  return (
    <div className={classes.subscriptions}>

    </div>
  )
}

export default Subscriptions;