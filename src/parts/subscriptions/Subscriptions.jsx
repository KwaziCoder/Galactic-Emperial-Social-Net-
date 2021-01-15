import React from 'react'
import classes from './Subscriptions.module.css'
import { groupAvatar } from './../../theme/images'


let groups = [
  { id: 1, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 114, subscribed: false },
  { id: 2, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 75, subscribed: true },
  { id: 3, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 45, subscribed: false },
  { id: 4, image: groupAvatar, title: 'Star Wars Community', subscribersNumber: 268, subscribed: false },
];


const Subscriptions = (props) => {

  if (props.groups.length === 0) {
    props.setGroups(groups)
  }
  return (
    <div className={classes.subscriptions}>
      <div className={classes.groups}>
        {props.groups.map(group => {
          return (
            <div key={group.id} className={classes.group}>
              <div className={classes.groupAvatar_container}>
                <image src={group.image} className={classes.groupAvatar} />
              </div>
              <div className={classes.groupTitle}>
                {group.title}
              </div>
              <div className={classes.subscribersNumber}>
                {group.subscribersNumber}
              </div>
              <button className={classes.subscribe_button}>
                {(group.subscribed) ? 'subscribe' : 'unsubscribe'}
              </button>
            </div>
          )
        })
        }
      </div>

      <div className={classes.searchControl}>
        <form className={classes.search_form}>
          <input type='text' placeholder='search...' value={props.searchControl.userInput}></input>
          <div className={classes.options}>
          {props.searchControl.options.map(option => {
              return (
                <p><input key={option.id} type='checkbox' className={classes.option} checked={option.switched}></input>{option.name}</p>
              )
            })}
          </div>
        </form>
      </div>
      </div>
  )
}

export default Subscriptions;