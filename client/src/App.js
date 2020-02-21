import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import UnitsContainer from './UnitsContainer';
import UsersContainer from './UsersContainer';
import Home from './Home';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login />}/>
        <Route path="/units" render={routerProps => <UnitsContainer {...routerProps}/>}/>
        <Route path="/users" render={routerProps => <UsersContainer {...routerProps}/>}/>
      </div>
    </Router>
  );
}

export default App;
