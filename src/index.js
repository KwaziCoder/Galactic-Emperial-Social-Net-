
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

import state, {subscribe} from './redux/state'





function renderFullApp(state) {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


renderFullApp(state);

subscribe(renderFullApp);

