import React from 'react';
import classes from './Messanger.module.css'
import Dialogs from './dialogs/Dialogs'
import Messages_container from './messages/Messages_container'


const Messanger = (props) => {
  return (
    <div className={classes.messanger}>
      <Dialogs dialogs={props.state.dialogs}/>
      <Messages_container store={props.store}/>
    </div>
  )
}

export default Messanger;


