import React from 'react';
import { returnFormattedDate, calculateBalance } from '../utilities/utilityFunctions';
import NewPaymentForm from './NewPaymentForm';
import PaymentsShow from './PaymentsShow';

const AuthUserShow = ({ match, users, addPayment, errors }) => {
    const user = users.find(user => user.id === Number(match.params.userId));

    const renderPayments = () => {
        if (user.residency.payments !== undefined) {
            return (
                <PaymentsShow payments={user.residency.payments}/>
            )
        }
    }
    return (
        <div>
            Balance: {calculateBalance(user.residency, user.unit.rent_cost_per_month)}$
            {console.log(addPayment)}
            <NewPaymentForm 
                    user={user} 
                    users={users}
                    addPayment={addPayment}
                    errors={errors}/>
            {renderPayments()}
        </div>
    )

}

export default AuthUserShow