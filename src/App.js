import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Header from './parts/header/Header'
import Profile from './parts/profile/Profile'
import Messanger from './parts/messanger/Messanger'
import Subsriptions_container from './parts/subscriptions/Subscriptions_container'



const App = (props) => {
  return (
    <div className='wrapper'>
      <div className='header'><Header /></div>
      <div className='content'>
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/messanger" render={() => <Messanger />} />
        <Route path="/subscriptions" render={() => <Subsriptions_container />} />
      </div>
    </div>
  );
}



export default App;
