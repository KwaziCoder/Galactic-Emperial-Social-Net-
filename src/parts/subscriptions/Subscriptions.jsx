import React from 'react'
import classes from './Subscriptions.module.css'
import { groupAvatar, avatar } from './../../theme/images'


let groups = [
  { id: 1, image: avatar, title: 'Star wars community', subscribersNumber: 114, subscribed: false },
  { id: 2, image: groupAvatar, title: 'Lord of the rings community', subscribersNumber: 75, subscribed: true },
  { id: 3, image: groupAvatar, title: 'Harry Potter community', subscribersNumber: 45, subscribed: false },
  { id: 4, image: groupAvatar, title: 'Marvel community', subscribersNumber: 268, subscribed: false },
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
                <img src={group.image} className={classes.groupAvatar} />
              </div>

              <div className={classes.descriptionGroupContainer}>
                <div className={classes.groupTitle}>
                  {group.title}
                </div>

                <div className={classes.subscribersNumber}>
                  {group.subscribersNumber} subscribers
                </div>
              </div>
              {(group.subscribed) 
              ? <button className={classes.subscribe_button} onClick={() => props.unsubscribe(group.id)}>unsubscribe</button> 
              : <button className={classes.subscribe_button} onClick={() => props.subscribe(group.id)}>subscribe</button>
              }
              

            </div>
          )
        })
        }
      </div>

      <div className={classes.searchControl}>

        <form className={classes.search_form}>
          <input className={classes.input} type='text' placeholder='search...' value={props.searchControl.userInput} onChange={(e) => props.updateSearchInput(e.target.value)}></input>

          <div className={classes.options}>
            {props.searchControl.options.map(option => {
              return (
                <p><input key={option.id} type='checkbox' className={classes.option} checked={option.switched} onChange={ () => props.switchOption(option.id) }></input>{option.name}</p>
              )
            })}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Subscriptions;