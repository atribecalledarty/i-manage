import React from 'react';
import { returnFormattedDate, calculateBalance } from '../utilities/utilityFunctions';
import NewPaymentForm from './NewPaymentForm';
import PaymentsShow from './PaymentsShow';
import Jumbotron from 'react-bootstrap/Jumbotron';

const AuthUserShowBalance = ({ match, users, addPayment, errors }) => {
    const user = users.find(user => user.id === Number(match.params.userId));

    const renderPayments = () => {
        if (user.residency.payments !== undefined) {
            return (
                <PaymentsShow payments={user.residency.payments}/>
            )
        }
    }
    return (
        <Jumbotron id="auth-user-jumbo">
            <div>
                Balance: <span id="balance">{calculateBalance(user.residency, user.unit.rent_cost_per_month)}</span>$
                {console.log(addPayment)}
                <NewPaymentForm 
                        user={user} 
                        users={users}
                        addPayment={addPayment}
                        errors={errors}/>
            </div>
            <br/>
            {renderPayments()}
          </Jumbotron> 
    )

}

export default AuthUserShowBalance