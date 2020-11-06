import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jwt_decode from 'jwt-decode'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


//Páginas
import Home from './pages/home';
import CadastrarAluno from './pages/cadastroaluno';
import CadastrarProfessor from './pages/cadastroprofessor';
import Login from './pages/login';
import Ranking from './pages/ranking'
import NotFound from './pages/notfound';
import Dashboard from './pages/admin/dashboard/dashboard';
import CrudDicas from './pages/admin/crudDicas/';
import Dicas from './pages/dicas';
import Timeline from './pages/timeline';
import Curso from './pages/admin/curso';

const token = localStorage.getItem('token-edux') 

const RotaAluno = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      token === null ?
      <Redirect to={{pathname:'/login', state:{from : props.location}}}/>:
    <Component {...props}/>
    }
  />
);
const RotaPrivada = ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = { props => 
      token !== null && jwt_decode(token).role === 'Admin' ?
        <Component {...props} /> :
        <Redirect to={{pathname : '/login', state :{from : props.location}}} /> 
    }
  />
);



const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
        <Route path='/cadastro' component={CadastrarAluno} />
        <Route path='/cadastrarprofessor' component={CadastrarProfessor} />
      <Route path='/login' component ={Login}/>
      <RotaPrivada path='/admin/dashboard' component={Dashboard} />
      <RotaPrivada path='/admin/crudCursos' component={Curso} />
      <RotaPrivada path='/admin/crudDicas' component={CrudDicas} />
      <RotaAluno path='/dicas' component={Dicas} />
      <RotaAluno path='/timeline' component={Timeline} />
      <RotaAluno path='/ranking' component={Ranking} />
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

