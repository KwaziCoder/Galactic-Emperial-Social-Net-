import React from 'react';
import './App.css';

import Header from './parts/header/Header'
import Profile from './parts/profile/Profile'


const App = () => {
  return ( 
    <div className='wrapper'>
      <div className='header'><Header/></div>
      <div className='profile'><Profile/></div>
      
    </div>
  );
}



export default App;
