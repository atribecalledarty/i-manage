import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from './fetchActions';
import UsersList from './UsersList';
import UserShow from './UnitShow';
import { Route } from 'react-router-dom';

class UsersContainer extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }

    render() {
        return(
            <div>
                {/* {console.log(this.props.users)} */}
                <UsersList users={this.props.users} />
                <Route path={`${this.props.match.url}/:userId`} 
                    render={routerProps => <UserShow {...routerProps} users={this.props.users}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);