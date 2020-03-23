import React from 'react';
import { returnFormattedDate, calculateBalance } from '../utilities/utilityFunctions';
import { Link } from 'react-router-dom';
import PaymentsShow from './PaymentsShow';

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
                    <p>
                        Resident since {returnFormattedDate(user.residency.start_date)}<br/>
                        Balance: ${calculateBalance(user.residency, user.unit.rent_cost_per_month)}<br/>
                        Unit {user.unit.unit_number}<br/>               
                    </p>
                    <PaymentsShow payments={user.residency.payments}/>
                </>
            )
        }
    }

    const clickHandler = () => {
        deleteUser(user.id);
        history.push('/users')
        // window.location.href='/users';
    }

    return (
        <div>
            {console.log('in user show', user, users)}
            <h3>{user.first_name} {user.last_name}</h3>
            <button onClick={clickHandler}>Delete User</button>
            <p>
                {user.email}<br/>
                {user.phone_number}
            </p>
            {renderResidencyInfo()}
            {renderLinkForPayment()}
        </div>
    )
}

export default UserShow;