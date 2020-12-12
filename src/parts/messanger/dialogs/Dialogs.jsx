import React from 'react';
import classes from './Dialogs.module.css'
import {nanoAvatar} from '../../../theme/images'
import {NavLink} from 'react-router-dom'


const Dialog = (props) => {
  return (
    <div className={classes.dialog}>
      <img src={nanoAvatar} className={classes.avatar}/>
      <NavLink to={"/messanger/" + props.person} className={classes.person}>{props.person}</NavLink>
    </div>
  )
}



const Dialogs = (props) => {

  let dialogs = props.dialogs.map( member => <Dialog id = {member.id} person={member.person} />);
  return (
    <div className={classes.dialogs}>
      {dialogs}
    </div>
  )
}


export default Dialogs;