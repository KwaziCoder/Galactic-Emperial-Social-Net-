import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './parts/header/Header'
import Profile from './parts/profile/Profile'
import Messanger from './parts/messanger/Messanger'



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='header'><Header /></div>
        <div className='content'>
          <Route  path="/profile" render={() => <Profile posts={props.posts}/>} />
          <Route  path="/messanger" render={() => <Messanger messages={props.messages} dialogs={props.dialogs}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
