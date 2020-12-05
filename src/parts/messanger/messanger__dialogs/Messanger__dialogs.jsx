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

let dialogsData = [
  {id: 1, person: 'LT334'},
  {id: 2, person: 'FN753'},
  {id: 1, person: 'IG439'},
];
 
let dialogs = dialogsData.map( member => <Messanger__dialog id = {member.id} person={member.person} />);




const Messanger__dialogs = (props) => {
  return (
    <div className={classes.messanger__dialogs}>
      {dialogs}
    </div>
  )
}


export default Messanger__dialogs;