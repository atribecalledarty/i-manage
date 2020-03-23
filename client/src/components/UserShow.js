import React from 'react';
import { returnFormattedDate, calculateBalance } from '../utilities/utilityFunctions';
import { Link } from 'react-router-dom';
// import NewPaymentForm from './NewPaymentForm'

const UserShow = ({ match, users, deleteUser, history, isLoggedIn, loggedInUser }) => {
    const user = users.find(user => user.id === Number(match.params.userId));
    const residency = user.residency;

    const renderLinkForPayment = () => {
        if (isLoggedIn && user.id === loggedInUser.id) {
            return (
                <>
                <Link to={`/auth_user/${user.id}/payments/new`}>Make Payment</Link><br/>
                </>
            )
        }
    }

    const renderPayments = () => {
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {residency.payments.slice(0).reverse().map(payment => {
                        return (
                            <tr key={payment.id}>
                                <td>{returnFormattedDate(payment.transaction_date)}</td>
                                <td>${payment.amount}</td>
                            </tr>
                        )    
                    })}
                    </tbody>
                </table>
            </div>
        )
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
            <p>
                {user.email}<br/>
                {user.phone_number}
            </p>
            {renderResidencyInfo()}
            <button onClick={clickHandler}>Delete User</button>
            {renderPayments()}
            {renderLinkForPayment()}
        </div>
    )
}

export default UserShow;