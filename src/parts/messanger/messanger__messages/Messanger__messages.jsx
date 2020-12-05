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
  return (
      <div className={classes.messanger__messages}>
        {props.messages.map( m => <Messanger__message message={m.message}/>)}
      </div>
    
  )
}


export default Messanger__messages;