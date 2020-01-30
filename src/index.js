import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./GlobalStyle"
import * as serviceWorker from './serviceWorker';
import { Router, Redirect } from '@reach/router'
import IndexPage from './pages/Index'
import CamPage from './pages/Cam'

ReactDOM.render(<>
<GlobalStyle />
    <Router>
      <IndexPage path='/' />
      <CamPage path='/cam' />
    </Router>

  </>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
