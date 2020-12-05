import React from 'react';
import classes from './Messanger__messages.module.css'


const Messanger__message = (props) => {
  return (
    <div className={classes.messanger__message}>
      {props.message} 
    </div> 
  )
}

let dialogData = [
  {message: 'Hi there!'},
  {message: 'Hi! How are you, bro?'},
  {message: 'Not so bad! My congragts to you with the victory on Hot!'},
  {message: 'Thanks! It was a hard battle!'},
  {message: 'Yes, I’ve heard of it!'},
]

let messages = dialogData.map( m => <Messanger__message message={m.message}/>)



const Messanger__messages = (props) => {
  return (
      <div className={classes.messanger__messages}>
        {messages}
      </div>
    
  )
}


export default Messanger__messages;