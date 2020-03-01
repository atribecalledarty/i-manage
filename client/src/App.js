import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import UnitsContainer from './UnitsContainer';
import UsersContainer from './UsersContainer';
import Home from './Home';
import { connect } from 'react-redux';
import { fetchUnits, fetchUsers, postNewUser, deleteUser } from './dispatchActions';

class App extends React.Component {  
  componentDidMount(){
    this.props.fetchResources();
  }

  // usersWithoutResidency = this.props.users.filter(user => user.residency === undefined);

  render() {
    return (
      <Router>
        <div>
          {/* {console.log(this.usersWithoutResidency)} */}
          {/* {console.log(this.props.users.filter(user => user.residency === undefined))} */}
          <Route path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />}/>
          <Route path="/units" render={routerProps => 
            <UnitsContainer 
              {...routerProps} 
              units={this.props.units}
              usersWithoutResidency={this.props.users.filter(user => user.residency === undefined)}/>}/>
          <Route path="/users" render={routerProps => 
            <UsersContainer 
              {...routerProps} 
              users={this.props.users} 
              addUser={this.props.addUser}
              errors={this.props.errors}
              deleteUser={this.props.deleteUser}/>}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
      units: state.units,
      users: state.users,
      errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchResources: () => { 
        dispatch(fetchUnits());
        dispatch(fetchUsers());
      },
      deleteUser: userId => dispatch(deleteUser(userId)),
      addUser: state => dispatch(postNewUser(state))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
