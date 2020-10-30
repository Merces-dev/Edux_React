import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import CadastrarAluno from './pages/cadastroaluno';
import CadastrarProfessor from './pages/cadastroprofessor';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/login';
import NotFound from './pages/notfound';
import Dashboard from './pages/admin/dashboard'

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/cadastrar' component={CadastrarAluno} />
        <Route path='/cadastrarprofessor' component={CadastrarProfessor} />
      <Route path='/login' component ={Login}/>
      <Route path='/admin/dashboard' component={Dashboard} />
      <Route component ={NotFound}/>
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

