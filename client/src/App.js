import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import NewUserForm from './components/NewUserForm';
import NavBar from './components/NavBar';
import AuthUserContainer from './components/AuthUserContainer';
import UserShow from './components/UserShow';
import UnitsContainer from './components/UnitsContainer';
import UsersContainer from './components/UsersContainer';
import NewPaymentForm from './components/NewPaymentForm';
import Home from './components/Home';
import { connect } from 'react-redux';
import { addUnits,
        addUsers,
        postNewUser,
        deleteUser,
        addResidency,
        deleteResidency,
        setLoginStatus,
        loginUser,
        logoutUser,
        addPayment,
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
              isLoggedIn={this.props.isLoggedIn} />}/>
              {/*  users={this.props.users}
                logoutUser={this.props.logoutUser}/>} /> */}
          <Route exact path="/login" render={routerProps => 
            <Login 
              {...routerProps}
              user={this.props.user}
              loginUser={this.props.loginUser}
              isLoggedIn={this.props.isLoggedIn}
              errors={this.props.errors}
              clearErrors={this.props.clearErrors}/>}/>
          <Route exact path="/signup" render={routerProps => 
            <NewUserForm 
              {...routerProps} 
              errors={this.props.errors}
              user={this.props.user} 
              addUser={this.props.addUser}
              isLoggedIn={this.props.isLoggedIn}/>}/>
          <Route path="/units" render={routerProps => 
            <UnitsContainer 
              {...routerProps} 
              units={this.props.units}
              usersWithoutResidency={this.props.users.filter(user => user.residency === undefined)}
              addResidency={this.props.addResidency}
              deleteResidency={this.props.deleteResidency}/>}/>
          <Route path="/users" render={routerProps => 
            <UsersContainer 
              {...routerProps}
              user={this.props.user}
              isLoggedIn={this.props.isLoggedIn} 
              users={this.props.users} 
              addUser={this.props.addUser}
              errors={this.props.errors}
              deleteUser={this.props.deleteUser}/>}/>
          <Route path={`/auth_user/:userId`} render={routerProps => 
            <AuthUserContainer 
              {...routerProps} 
              users={this.props.users} 
              deleteUser={this.props.deleteUser}
              isLoggedIn={this.props.isLoggedIn}
              loggedInUser={this.props.user}
              addPayment={this.props.addPayment}
              logoutUser={this.props.logoutUser}
              clearErrors={this.props.clearErrors}
              errors={this.props.errors}/>}/>
            {/* <Route path={`/auth_user/:userId/balance`} render={routerProps => 
              <AuthUserShow}/> */}
          </Router>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
      units: state.units,
      users: state.users,
      loading_users: state.loading_users,
      loading_units: state.loading_units,
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
      deleteUser: userId => dispatch(deleteUser(userId)),
      addUser: (state, isManager) => dispatch(postNewUser(state, isManager)),
      addResidency: (userId, unitId) => dispatch(addResidency(userId, unitId)),
      deleteResidency: id => dispatch(deleteResidency(id)),
      setLoginStatus: () => dispatch(setLoginStatus()),
      loginUser: user => dispatch(loginUser(user)),
      logoutUser: () => dispatch(logoutUser()),
      addPayment: (amount, residencyId) => dispatch(addPayment(amount, residencyId)),
      clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
