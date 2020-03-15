import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UnitsContainer from './components/UnitsContainer';
import UsersContainer from './components/UsersContainer';
import Home from './components/Home';
import { connect } from 'react-redux';
import { addUnits, addUsers, postNewUser, deleteUser, addResidency, deleteResidency } from './utilities/dispatchActions';

class App extends React.Component {  
  componentDidMount(){
    this.props.fetchResources();
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />}/>
          <Route exact path="/signup" render={() => <SignUp />}/>
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
        dispatch(addUnits());
        dispatch(addUsers());
      },
      deleteUser: userId => dispatch(deleteUser(userId)),
      addUser: state => dispatch(postNewUser(state)),
      addResidency: (userId, unitId) => dispatch(addResidency(userId, unitId)),
      deleteResidency: id => dispatch(deleteResidency(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
