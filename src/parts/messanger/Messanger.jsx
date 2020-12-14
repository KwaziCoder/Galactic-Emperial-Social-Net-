import React from 'react';
import classes from './Messanger.module.css'
import Dialogs_container from './dialogs/Dialogs_container'
import Messages_container from './messages/Messages_container'


const Messanger = (props) => {
  return (
    <div className={classes.messanger}>
      <Dialogs_container />
      <Messages_container />
    </div>
  )
}

export default Messanger;


