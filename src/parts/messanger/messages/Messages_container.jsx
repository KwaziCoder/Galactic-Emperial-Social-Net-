import React from 'react';
import {actionCreator} from '../../../redux/messanger-reducer'
import Messages from './Messages'




const Messages_container = (props) => {

  let state = props.store.getState();

  let writeMessage = () => {
    let action = actionCreator.writeMessage();
    props.store.dispatch(action);
  }

  let changeInputMessage = (update) => {
    let action = actionCreator.changeInputMessage(update);
    props.store.dispatch(action);
  }

  return (
      <Messages writeMessage={writeMessage} changeInputMessage={changeInputMessage} messages={state.messanger.messages} inputState={state.messanger.inputMessage}/>
      
  )
}


export default Messages_container;