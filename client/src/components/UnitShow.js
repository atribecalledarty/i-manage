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
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                {residency.payments.slice(0).reverse().map(payment => {
                    return (
                        <tr>
                            <td>{returnFormattedDate(payment.transaction_date)}</td>
                            <td>${payment.amount}</td>
                        </tr>
                    )    
                })}
                </table>
            </div>
        )
    }

    const renderResidencyInfo = () => {
        if (unit.residency !== undefined) {
            return (
                <div>
                    <p>
                        {/* {console.log(residency)} */}
                        {resident.first_name} {resident.last_name}<br/>
                        {resident.email}<br/>
                        {resident.phone_number}<br/><br/>

                        Resident since: {returnFormattedDate(residency.start_date)}<br/>
                        Balance: ${calculateBalance(residency, unit.rent_cost_per_month)}
                    </p>
                    {renderPayments()}
                    <button onClick={() => deleteResidency(residency.id)}>Remove Resident</button>
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