import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
        loginUser,
        postNewUser 
      } from './utilities/dispatchActions';
import Container from 'react-bootstrap/Container';
import ProtectedRoute from './ProtectedRoute';

class App extends React.Component {  
  componentDidMount(){
    this.props.fetchResources();
    this.props.setLoginStatus();
  }

  render() {
    return (
      <Container className="app">
        <Router >
          <Route path="/" render={routerProps => <NavBarContainer {...routerProps}/>}/>
          {/* <Route path="/" render={routerProps => <SetLogin {...routerProps}/>}/> */}
          <Route exact path="/" render={routerProps => 
            <Home 
              {...routerProps}
              loading_users={this.props.loading_users}
              loading_units={this.props.loading_units}
              user={this.props.user}
              isLoggedIn={this.props.isLoggedIn}
              loading_session={this.props.loading_session} />}/>
          <Route exact path="/login" render={routerProps => 
            <Login 
              {...routerProps}
              user={this.props.user}
              loginUser={this.props.loginUser}
              isLoggedIn={this.props.isLoggedIn}/>}/>
          <Route exact path="/signup" render={routerProps => 
            <SignupForm 
              {...routerProps} 
              user={this.props.user} 
              addUser={this.props.addUser}
              isLoggedIn={this.props.isLoggedIn}/>}/>
          <Route path="/units" render={routerProps => <ProtectedRoute {...routerProps} component={UnitsContainer}/>}/>
          <Route path="/users" render={routerProps => <ProtectedRoute {...routerProps} component={UsersContainer}/>}/>
          <Route path={`/auth_user/:userId`} render={routerProps => <AuthUserContainer {...routerProps} />}/>     
        </Router>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
      loading_users: state.loading_users,
      loading_units: state.loading_units,
      loading_session: state.loading_session,
      isLoggedIn: state.isLoggedIn,
      user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchResources: () => { 
        dispatch(addUnits());
        dispatch(addUsers());
      },
      setLoginStatus: () => dispatch(setLoginStatus()),
      loginUser: user => dispatch(loginUser(user)),
      addUser: (user, isManager) => dispatch(postNewUser(user, isManager))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
