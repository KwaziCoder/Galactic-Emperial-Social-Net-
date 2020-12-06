
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import store from './redux/state'





function renderFullApp () {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={this.getState()} writeMessage={this.writeMessage.bind(this)} changeInputMessage={this.changeInputMessage.bind(this)}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderFullApp.bind(store);

store.subscribe(renderFullApp);

store.setState();

