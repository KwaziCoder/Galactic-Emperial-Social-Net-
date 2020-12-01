import React from 'react';
import classes from './Messanger__messages.module.css'

const Messanger__messages = (props) => {
  return (
      <div className={classes.messanger__messages}>
        <Messanger__message message="Hi there!"/> 
        <Messanger__message message="Hi! How are you, bro?"/>
        <Messanger__message message="Not so bad! My congragts to you with the victory on Hot!"/>
        <Messanger__message message="Thanks! It was a hard battle!"/>
        <Messanger__message message="Yes, I’ve heard of it."/>
      </div>
    
  )
}

const Messanger__message = (props) => {
  return (
    <div className={classes.messanger__message}>
      {props.message} 
    </div> 
  )
}

export default Messanger__messages;