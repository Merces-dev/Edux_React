import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Ranking from './pages/ranking'

import NotFound from './pages/notfound';
import Dashboard from './pages/admin/dashboard'

const routing = (
  <Router>
    <Switch>
      <Route path='/dasd' component ={NotFound}/>
      <Route path='/admin/dashboard' component={Dashboard} />
      <Route path='/ranking' component={Ranking} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();

