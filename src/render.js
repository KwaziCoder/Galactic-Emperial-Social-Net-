import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'





export function renderFullApp(state) {

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state = {state}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}
