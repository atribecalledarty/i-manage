import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ManagerNavBar from './ManagerNavBar';
import UserNavBar from './UserNavBar';
import NoUserNavBar from './NoUserNavBar';
import { connect } from 'react-redux';
import { logoutUser } from '../../utilities/dispatchActions';

const NavBarContainer = ({ isLoggedIn, user, logoutUser, history }) => {
    const redirectToHome = () => {
        history.push('/');
    }

    const renderNav = () => {
        if (isLoggedIn && user.manager_status) {
            return (
                <ManagerNavBar user={user} history={history} logoutUser={logoutUser}/>
            )
        } else if (isLoggedIn) {
            return (
                <UserNavBar user={user} history={history} logoutUser={logoutUser}/>            
            )
        } else {
            return (
                <NoUserNavBar history={history}/>
            )
        }
    }
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand ><a href="#" id="brand" onClick={redirectToHome}>Luna's Cabins</a></Navbar.Brand>
                {renderNav()}
            </Container>
        </Navbar>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);