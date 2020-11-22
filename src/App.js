import React from 'react';
import './App.css';

import Header from './parts/Header'
import Sidebar from './parts/Sidebar'
import Profile from './parts/Profile'


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
  );
}



export default App;
