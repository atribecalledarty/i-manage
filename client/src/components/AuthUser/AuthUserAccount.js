import React from 'react';
import Button from 'react-bootstrap/Button';
import { returnFormattedDate } from '../../utilities/utilityFunctions'

const AuthUserAccount = ({ match, history, users, deleteUser, isLoggedIn, logoutUser }) => {
    const user = users.find(user => user.id === Number(match.params.userId));
    
    const clickHandler = () => {
        deleteUser(user.id);
        logoutUser();
        history.push('/')
    }

    const renderResidencyInfo = () => {
        if (user.residency !== undefined) {
            return (
                <>
                    <i>Resident Since {returnFormattedDate(user.residency.start_date)}<br/>
                    Unit #{user.unit.unit_number}</i><br/><br/>
                </>
            )
        } else {
            return ( 
                <>
                    <i>Please have your manager assign you to a unit.</i><br/><br/>
                </>
            )
        }
    }

    const renderAccountInfo = () => {
        if (user !== undefined) {
            return (
                <>
                    <h3>{user.first_name} {user.last_name} <Button size="sm" variant="outline-danger" onClick={clickHandler}>Delete Account</Button></h3>
                    {renderResidencyInfo()}
                    <b>Email:</b> {user.email}<br/>
                    <b>Phone:</b> {user.phone_number}<br/>
                </>
            )   
        }
    }
    
    return (
        <>
            {renderAccountInfo()}
        </> 
    )
}

export default AuthUserAccount;