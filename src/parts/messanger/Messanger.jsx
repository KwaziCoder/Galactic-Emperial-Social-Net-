import React from 'react';
import classes from './Messanger.module.css'
import Messanger__dialogs from './messanger__dialogs/Messanger__dialogs'
import Messanger__messages from './messanger__messages/Messanger__messages'


const Messanger = (props) => {
  return (
    <div className={classes.messanger}>
      <Messanger__dialogs dialogs={props.state.dialogs}/>
      <Messanger__messages messages={props.state.messages} inputState={props.state.inputMessage}/>
    </div>
  )
}

export default Messanger;


