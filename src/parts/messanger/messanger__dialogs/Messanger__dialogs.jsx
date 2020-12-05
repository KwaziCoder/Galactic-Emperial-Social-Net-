import React from 'react';
import classes from './Messanger__dialogs.module.css'
import {nanoAvatar} from './../../../theme/images'
import {NavLink} from 'react-router-dom'


const Messanger__dialog = (props) => {
  return (
    <div className={classes.messanger__dialog}>
      <img src={nanoAvatar} className={classes.messanger__avatar}/>
      <NavLink to={"/messanger/" + props.person} className={classes.messanger__person}>{props.person}</NavLink>
    </div>
  )
}



const Messanger__dialogs = (props) => {
  return (
    <div className={classes.messanger__dialogs}>
      {props.dialogs.map( member => <Messanger__dialog id = {member.id} person={member.person} />)}
    </div>
  )
}


export default Messanger__dialogs;