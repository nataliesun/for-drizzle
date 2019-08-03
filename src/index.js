import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import {
  faBars, faTint, faSpinner, faChalkboard, faCodeBranch, faTimes,
} from '@fortawesome/free-solid-svg-icons';

import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

library.add(
  faBars,
  faArrowAltCircleRight,
  faTint,
  faSpinner,
  faChalkboard,
  faCodeBranch,
  faTimes
)

ReactDOM.render(
  <BrowserRouter basename="/for-drizzle/">
    <App />
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
