import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import NavBar from './components/NavBar';
import AuthUserContainer from './components/AuthUserContainer';
import UnitsContainer from './components/UnitsContainer';
import UsersContainer from './components/UsersContainer';
import Home from './components/Home';
import { connect } from 'react-redux';
import { addUnits,
        addUsers,
        setLoginStatus,
        loginUser,
        logoutUser,
        clearErrors 
      } from './utilities/dispatchActions';
import Container from 'react-bootstrap/Container'

class App extends React.Component {  
  componentDidMount(){
    this.props.fetchResources();
    this.props.setLoginStatus();
  }

  render() {
    return (
      <Container>
        <Router >
          <Route path="/" render={routerProps =>
            <NavBar 
              {...routerProps} 
              user={this.props.user} 
              isLoggedIn={this.props.isLoggedIn} 
              logoutUser={this.props.logoutUser}/>
            }/>
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
              isLoggedIn={this.props.isLoggedIn}
              errors={this.props.errors}
              clearErrors={this.props.clearErrors}/>}/>
          <Route exact path="/signup" render={routerProps => 
            <SignupForm 
              {...routerProps} 
              errors={this.props.errors}
              user={this.props.user} 
              addUser={this.props.addUser}
              isLoggedIn={this.props.isLoggedIn}
              clearErrors={this.props.clearErrors}/>}/>
          <Route path="/units" render={routerProps => <UnitsContainer {...routerProps} />}/>
          <Route path="/users" render={routerProps => <UsersContainer {...routerProps}/>}/>
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
      errors: state.errors,
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
      logoutUser: () => dispatch(logoutUser()),
      clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
