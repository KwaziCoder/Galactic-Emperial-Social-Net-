import React from 'react';
import classes from './Messanger.module.css'
import Dialogs from './dialogs/Dialogs'
import Messages from './messages/Messages'


const Messanger = (props) => {
  return (
    <div className={classes.messanger}>
      <Dialogs dialogs={props.state.dialogs}/>
      <Messages messages={props.state.messages} inputState={props.state.inputMessage} dispatch={props.dispatch} actionCreator={props.actionCreator}/>
    </div>
  )
}

export default Messanger;


