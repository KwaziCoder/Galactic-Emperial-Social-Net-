import React from 'react';
import classes from './Messanger__messages.module.css'


const Messanger__message = (props) => {
  return (
    <div className={classes.messanger__message}>
      {props.message} 
    </div> 
  )
}



const Messanger__messages = (props) => {

  let messages = props.messages.map( m => <Messanger__message message={m.message}/> );

  let newMessage = React.createRef();

  let writeMessage = () => {
    props.writeMessage();
  }

  let changeInputMessage = () => {
    let update = newMessage.current.value;
    props.changeInputMessage(update);
  }

  return (
      <div className={classes.messanger__messages}>
        {messages}
        <div className={classes.newMessage}>
          <textarea ref={newMessage} onChange={changeInputMessage} value={props.inputState.textOfNewMessage}></textarea>
          <button onClick={writeMessage}>Отправить</button>
        </div>
      </div>
    
  )
}


export default Messanger__messages;