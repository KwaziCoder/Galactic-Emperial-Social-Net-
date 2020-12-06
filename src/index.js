
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import store, {actionCreator} from './redux/state'





function renderFullApp() {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} actionCreator={actionCreator}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(renderFullApp);

renderFullApp();



