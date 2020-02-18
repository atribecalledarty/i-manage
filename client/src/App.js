import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import UnitsContainer from './UnitsContainer';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <h1>Welcome to Luna's Tavern</h1>} />
        <Route exact path="/login" render={() => <Login />}/>
        <Route path="/units" render={routerProps => <UnitsContainer {...routerProps}/>}/>

      </div>
    </Router>
  );
}

export default App;
