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

    const renderResidencyInfo = () => {
        if (user.residency !== undefined) {
            return (
                <>
                    <i>Resident since {returnFormattedDate(user.residency.start_date)}<br/>
                    Unit #{user.unit.unit_number}</i><br/><br/>
                </>
            )
        } else {
            return (
                <>
                    <i>Not yet assigned to unit. Please go to units to assign user to a unit.</i><br/><br/>
                </>
            )
        }
    }

    // const renderPayments = () => {
    //     if (user.residency.payments !== undefined) {
    //         return (
    //             <PaymentsShow payments={user.residency.payments}/>
    //         )
    //     }
    // }

    const clickHandler = () => {
        deleteUser(user.id);
        history.push('/users')
    }   

    return (
        <>
            <h3>{user.first_name} {user.last_name} <Button size="sm" variant="outline-danger" onClick={clickHandler}>Delete User</Button></h3>
            {renderResidencyInfo()}
            <b>Email:</b> {user.email}<br/>
            <b>Phone number:</b> {user.phone_number}<br/>
        </>
    )
}

export default UserShow;