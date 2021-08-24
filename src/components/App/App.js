import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from '../Signup';
import Login from '../Login';
import Main from '../Main';
const routes = [
	{ path: '/signup', component: Signup },
	{ path: '/login', component: Login },
	{ path: '/main', component: Main },
	{ path: '/', component: Login }
];
function App() {
  return (
    <div className="App">
            <Router>
                <Switch>
                  {routes.map(({path, component})=> <Route key={path} path={path} component={component} exact/>)}
                </Switch>
            </Router>
      </div>
  );
}

export default App;
