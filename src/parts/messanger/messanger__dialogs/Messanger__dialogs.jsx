import React from 'react';
import classes from './Messanger__dialogs.module.css'
import {nanoAvatar} from './../../../theme/images'


const Messanger__dialogs = (props) => {
  return (
    <div className={classes.messanger__dialogs}>
      <Messanger__dialog person="LT334" />
      <Messanger__dialog person="FN753" />
      <Messanger__dialog person="IG439" />
    </div>
  )
}

const Messanger__dialog = (props) => {
  return (
    <div className={classes.messanger__dialog}>
      <img src={nanoAvatar} className={classes.messanger__avatar}/>
      <div className={classes.messanger__person}>{props.person}</div>
    </div>
  )
}

export default Messanger__dialogs;