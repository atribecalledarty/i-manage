import React from 'react';
import { returnFormattedDate, calculateBalance } from '../utilities/utilityFunctions';
import { Link } from 'react-router-dom';

const UnitShow = ({ match, units, deleteResidency }) => {
    const unit = units.find(unit => unit.id === Number(match.params.unitId))
    const resident = unit.resident;
    const residency = unit.residency;
    // console.log(unit)
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
        if (unit.residency !== undefined) {
            return (
                <div>
                    <p>
                        {console.log('in unit show', unit)}
                        {resident.first_name} {resident.last_name}<br/>
                        {resident.email}<br/>
                        {resident.phone_number}<br/><br/>

                        Resident since: {returnFormattedDate(residency.start_date)}<br/>
                        Balance: ${calculateBalance(residency, unit.rent_cost_per_month)}<br/>
                        <button onClick={() => deleteResidency(residency.id)}>Remove Resident</button>
                    </p>
                    {renderPayments()}
                </div>
            )
        } else {
            return (
                <Link to={`/units/${match.params.unitId}/residents/new`}>Add Existing User to Unit</Link>
            )
        }
    }

    return (
        <div>
            {/* {console.log(unit)} */}
            <h3>Unit {unit.unit_number}</h3>
            <p>
                {unit.type_of_unit}<br/>
                {unit.sq_ft} sq ft<br/>
                ${unit.rent_cost_per_month}/month
            </p>
            
            {renderResidencyInfo()}
        </div>  
    )
}

export default UnitShow;