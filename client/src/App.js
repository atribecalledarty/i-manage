import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import NavBarContainer from './components/NavBar/NavBarContainer';
import AuthUserContainer from './components/AuthUser/AuthUserContainer';
import UnitsContainer from './components/Units/UnitsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Home from './components/Home';
import { connect } from 'react-redux';
import { addUnits, addUsers, setLoginStatus } from './utilities/dispatchActions';
import Container from 'react-bootstrap/Container';
import ProtectedRoute from './ProtectedRoute';
import { Jumbotron } from 'react-bootstrap';

class App extends React.Component {  
  componentDidMount(){
    this.props.addUnits();
    this.props.addUsers();
    this.props.setLoginStatus();
  }

  render() {
    return <Container className="app">
      <Router >
        <Route path="/" render={routerProps => <NavBarContainer {...routerProps}/>}/>
        <Jumbotron>
          <Switch>
            <Route exact path="/" render={routerProps => <Home {...routerProps}/>}/>
            <Route exact path="/login" render={routerProps => <Login {...routerProps}/>}/>
            <Route exact path="/signup" render={routerProps => <SignupForm {...routerProps}/>}/>
            <Route path="/units" render={routerProps => <ProtectedRoute {...routerProps} component={UnitsContainer}/>}/>
            <Route path="/users" render={routerProps => <ProtectedRoute {...routerProps} component={UsersContainer}/>}/>
            <Route path={`/auth_user/:userId`} render={routerProps => <ProtectedRoute {...routerProps} component={AuthUserContainer}/>}/>    
          </Switch>
        </Jumbotron>
      </Router>
    </Container>
  }
}

export default connect(null, { addUnits, addUsers, setLoginStatus })(App);
