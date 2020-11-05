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
import Ranking from './pages/ranking'
import NotFound from './pages/notfound';
import Dashboard from './pages/admin/dashboard/dashboard';
import CrudDicas from './pages/admin/crudDicas/';
import Dicas from './pages/dicas';
import Curso from './pages/admin/curso';



const RotaAluno = () =>{
  return(
    <Route
      render = {
        console.log('')
      }
    />
  )
};
const RotaProfessor = () =>{
  return(
    <Route
      render = {
        console.log('')
      }
    />
  )
};




const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/cadastrar' component={CadastrarAluno} />
        <Route path='/cadastrarprofessor' component={CadastrarProfessor} />
      <Route path='/login' component ={Login}/>
      <Route path='/admin/dashboard' component={Dashboard} />
      <Route path='/admin/curso' component={Curso} />
      <Route path='/admin/crudDicas' component={CrudDicas} />
      <Route path='/dicas' component={Dicas} />
      <Route component ={NotFound}/>
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

