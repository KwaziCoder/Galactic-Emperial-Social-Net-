import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import store from './redux/reduxStore'





function renderFullApp() {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={store} state={store.getState()} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(renderFullApp);

renderFullApp();



