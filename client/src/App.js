import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import UnitsContainer from './UnitsContainer';
import UsersContainer from './UsersContainer';
import Home from './Home';
import { connect } from 'react-redux';
import { fetchUnits, fetchUsers, deleteUser } from './dispatchActions';

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
          <Route path="/units" render={routerProps => <UnitsContainer {...routerProps} units={this.props.units}/>}/>
          <Route path="/users" render={routerProps => 
            <UsersContainer 
              {...routerProps} 
              users={this.props.users} 
              deleteUser={this.props.deleteUser}/>}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
      units: state.units,
      users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchResources: () => { 
        dispatch(fetchUnits());
        dispatch(fetchUsers());
      },
      deleteUser: userId => dispatch(deleteUser(userId))  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
