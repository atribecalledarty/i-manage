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
import { addUnits,
        addUsers,
        setLoginStatus,
        loginUser
      } from './utilities/dispatchActions';
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
    return (
      <Container className="app">
        <Router >
          <Route path="/" render={routerProps => <NavBarContainer {...routerProps}/>}/>
          <Jumbotron>
            <Switch>
              <Route exact path="/" render={routerProps => <Home {...routerProps}/>}/>
              <Route exact path="/login" render={routerProps => 
                <Login 
                  {...routerProps}
                  user={this.props.user}
                  loginUser={this.props.loginUser}
                  isLoggedIn={this.props.isLoggedIn}/>}/>
              <Route exact path="/signup" render={routerProps => <SignupForm {...routerProps}/>}/>
              <Route path="/units" render={routerProps => <ProtectedRoute {...routerProps} component={UnitsContainer}/>}/>
              <Route path="/users" render={routerProps => <ProtectedRoute {...routerProps} component={UsersContainer}/>}/>
              {/* <Route path={`/auth_user/:userId`} render={routerProps => <AuthUserContainer {...routerProps} />}/>      */}
              <Route path={`/auth_user/:userId`} render={routerProps => <ProtectedRoute {...routerProps} component={AuthUserContainer}/>}/>    
            </Switch>
          </Jumbotron>
        </Router>
      </Container>
    );
  }
}

const mapState = state => ({
  isLoggedIn: state.isLoggedIn,
  user: state.user
})

const mapDispatch = { addUnits, addUsers, setLoginStatus, loginUser }

export default connect(mapState, mapDispatch)(App);
