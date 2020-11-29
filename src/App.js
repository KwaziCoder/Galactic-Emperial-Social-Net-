import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './parts/header/Header'
import Profile from './parts/profile/Profile'
import Messanger from './parts/messanger/Messanger'



const App = () => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='header'><Header /></div>
        <div className='content'>
          <Route path="/profile" component={Profile} />
          <Route path="/messanger" component={Messanger} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
