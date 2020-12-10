import React from 'react';
import classes from './Messanger__messages.module.css'
import {actionCreator} from './../../../redux/messanger-reducer'


const Messanger__message = (props) => {
  return (
    <div className={classes.messanger__message}>
      {props.message} 
    </div> 
  )
}



const Messanger__messages = (props) => {

  let messages = props.messages.map( m => <Messanger__message message={m.message}/> );

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
      <div className={classes.messanger__messages}>
        {messages}
        <div className={classes.newMessage}>
          <textarea onChange={changeInputMessage} value={props.inputState.textOfNewMessage}></textarea>
          <button onClick={writeMessage}>Отправить</button>
        </div>
      </div>
    
  )
}


export default Messanger__messages;