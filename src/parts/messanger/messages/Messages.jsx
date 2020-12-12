import React from 'react';
import classes from './Messages.module.css'
import {actionCreator} from '../../../redux/messanger-reducer'


const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.message} 
    </div> 
  )
}



const Messages = (props) => {

  let messages = props.messages.map( m => <Message message={m.message}/> );

  let writeMessage = () => {
    let action = actionCreator.writeMessage();
    props.dispatch(action);
  }

  let changeInputMessage = (e) => {
    let update = e.target.value;
    let action = actionCreator.changeInputMessage(update);
    props.dispatch(action);
  }

  return (
      <div className={classes.messages}>
        {messages}
        <div className={classes.newMessage}>
          <textarea onChange={changeInputMessage} value={props.inputState.textOfNewMessage}></textarea>
          <button onClick={writeMessage}>Отправить</button>
        </div>
      </div>
    
  )
}


export default Messages;