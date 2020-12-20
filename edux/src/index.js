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
import Login from './pages/login';
import Ranking from './pages/ranking'
import NotFound from './pages/notfound';
import Dashboard from './pages/admin/dashboard/dashboard';
import CrudDicas from './pages/admin/crudDicas/';
import CrudObjetivos from './pages/admin/crudObjetivos/';
import Dicas from './pages/dicas';
import Timeline from './pages/timeline';
import Curso from './pages/admin/crudCurso';
import CrudTurmas from './pages/admin/crudTurmas';
import Cursos from './pages/cursos';
import Perfil from './pages/perfil';
import Objetivos from './pages/objetivos';


const token = localStorage.getItem('token-edux') 

// Somente para quem nao tem cadastro
const RotaNaoCadastrado= ({component : Component, ...rest}) => (
  <Route
    {...rest}
    render = {
      props => 
      token !== null ?
      <Redirect to={{pathname:'/', state:{from : props.location}}}/>:
    <Component {...props}/>
    }
  />
);
// Somente para alunos

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
// Somente para professores

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
      <RotaNaoCadastrado path='/cadastrar' component={CadastrarAluno} />
      <RotaNaoCadastrado path='/login' component ={Login}/>
      <RotaPrivada path='/admin/dashboard' component={Dashboard} />
      <RotaPrivada path='/admin/crudCursos' component={Curso} />
      <RotaPrivada path='/admin/crudObjetivos' component={CrudObjetivos} />
      <RotaPrivada path='/admin/crudDicas' component={CrudDicas} />
      <RotaPrivada path='/admin/crudTurmas' component={CrudTurmas} />
      <RotaAluno path='/dicas' component={Dicas} />
      <RotaAluno path='/perfil' component={Perfil} />
      <RotaAluno path='/timeline' component={Timeline} />
      <RotaAluno path='/ranking' component={Ranking} />
      <RotaAluno path='/objetivos' component={Objetivos} />
      <RotaAluno path='/cursos' component={Cursos} />
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

