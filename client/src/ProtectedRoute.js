import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

class ProtectedRoute extends React.Component {
    render() {
        const Component = this.props.component;
        const isAuthenticated = this.props.isLoggedIn;
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

const mapState = state => state.isLoggedIn

export default connect(mapState)(ProtectedRoute);