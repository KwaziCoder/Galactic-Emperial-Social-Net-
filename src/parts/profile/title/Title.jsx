import React from 'react';
import classes from './Title.module.css'

const Title = () => {
  return (
    <div className={classes.title}>
      <div className={classes.name}>StormTrooper FN555</div>
      <div className={classes.status}>Rebels will be vanished!!11!!</div>
    </div>
  )
}

export default Title;