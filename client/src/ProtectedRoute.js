import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.getItem('user') !== "undefined";
       
        return isAuthenticated ? (
            <Component history={this.props.history} match={this.props.match}/>
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

const mapState = state => ({ isLoggedIn: state.isLoggedIn })

export default connect(mapState)(ProtectedRoute);