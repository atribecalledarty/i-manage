import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import NewUserForm from './components/NewUserForm';
import NavBar from './components/NavBar';
import UserShow from './components/UserShow';
import UnitsContainer from './components/UnitsContainer';
import UsersContainer from './components/UsersContainer';
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
        logoutUser 
      } from './utilities/dispatchActions';

class App extends React.Component {  
  componentDidMount(){
    this.props.fetchResources();
    this.props.setLoginStatus();
  }

  render() {
    return (
      <Router >
        {console.log('in app comp logged in status', this.props.isLoggedIn)}
        <h1>Welcome to Luna's Tavern</h1>
        
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
            errors={this.props.errors}/>}/>
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
            users={this.props.users} 
            addUser={this.props.addUser}
            errors={this.props.errors}
            deleteUser={this.props.deleteUser}/>}/>
        <Route path={`/auth_user/:userId`} render={routerProps => 
          <UserShow 
            {...routerProps} 
            users={this.props.users} 
            deleteUser={this.props.deleteUser}/>}/>
        
      </Router>
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
      addUser: state => dispatch(postNewUser(state)),
      addResidency: (userId, unitId) => dispatch(addResidency(userId, unitId)),
      deleteResidency: id => dispatch(deleteResidency(id)),
      setLoginStatus: () => dispatch(setLoginStatus()),
      loginUser: user => dispatch(loginUser(user)),
      logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
