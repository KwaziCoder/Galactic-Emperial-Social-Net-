import React from 'react';
import classes from './Messages.module.css'



const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.message} 
    </div> 
  )
}



const Messages = (props) => {

  let messages = props.messages.map( m => <Message message={m.message}/> );

  let onWriteMessage = () => {
    props.writeMessage();
  }

  let onChangeInputMessage = (e) => {
    let update = e.target.value;
    props.changeInputMessage(update);
    
  }

  return (
      <div className={classes.messages}>
        {messages}
        <div className={classes.newMessage}>
          <textarea onChange={onChangeInputMessage} value={props.inputState.textOfNewMessage}></textarea>
          <button onClick={onWriteMessage}>Отправить</button>
        </div>
      </div>
    
  )
}



export default Messages;