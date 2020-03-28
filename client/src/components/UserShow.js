import React from 'react';
import { returnFormattedDate, calculateBalance } from '../utilities/utilityFunctions';
import { Link, Route } from 'react-router-dom';
import PaymentsShow from './PaymentsShow';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import NewPaymentForm from './NewPaymentForm';

const UserShow = ({ match, users, deleteUser, history, isLoggedIn, loggedInUser }) => {
    const user = users.find(user => user.id === Number(match.params.userId));

    const renderLinkForPayment = () => {
        if (isLoggedIn && user.id === loggedInUser.id && user.residency) {
            return (
                <>
                    <Link to={`/auth_user/${user.id}/payments/new`}>Make Payment</Link><br/>
                </>
            )
        }
    }

    const renderResidencyInfo = () => {
        if (user.residency !== undefined) {
            return (
                <>
                    Resident since {returnFormattedDate(user.residency.start_date)}<br/>
                    Balance: ${calculateBalance(user.residency, user.unit.rent_cost_per_month)}<br/>
                    Unit # {user.unit.unit_number}<br/>
                </>
            )
        }
    }

    const renderPayments = () => {
        if (user.residency.payments !== undefined) {
            return (
                <PaymentsShow payments={user.residency.payments}/>
            )
        }
    }

    const clickHandler = () => {
        deleteUser(user.id);
        history.push('/users')
        // window.location.href='/users';
    }   

    return (
        <Jumbotron fluid>
            <Col md={{ span: 6, offset: 3 }}>
                {/* {console.log('in user show', user, users)} */}
                <h3>{user.first_name} {user.last_name} <Button size="sm" variant="outline-danger" onClick={clickHandler}>Delete User</Button></h3>
{/*                 
                <p>
                </p> */}
                <p>
                    Email: {user.email}<br/>
                    Phone number: {user.phone_number}<br/>
                    {renderResidencyInfo()}
                </p>
                <hr/>
                {renderPayments()}
                {renderLinkForPayment()}
                
                <Route path={"/auth_user/:userId/payments/new"} render={routerProps => 
                    <NewPaymentForm 
                    {...routerProps} 
                    user={this.props.user} 
                    users={this.props.users}
                    addPayment={this.props.addPayment}
                    errors={this.props.errors}/>}/>
            </Col>
        </Jumbotron>
    )
}

export default UserShow;