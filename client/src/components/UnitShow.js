import React from 'react';
import { returnFormattedDate, calculateBalance } from '../utilities/utilityFunctions';
import { Link } from 'react-router-dom';
import PaymentsShow from './PaymentsShow';

const UnitShow = ({ match, units, deleteResidency }) => {
    const unit = units.find(unit => unit.id === Number(match.params.unitId))
    const resident = unit.resident;
    const residency = unit.residency;

    const renderResidencyInfo = () => {
        if (unit.residency !== undefined) {
            return (
                <div>
                    <h5>Resident</h5>
                    <p>
                        {/* {console.log('in unit show', unit)} */}
                        {resident.first_name} {resident.last_name}<br/>
                        {resident.email}<br/>
                        {resident.phone_number}<br/><br/>
{/* 
                        Resident since: {returnFormattedDate(residency.start_date)}<br/>
                        Balance: ${calculateBalance(residency, unit.rent_cost_per_month)}<br/> */}
                        <button onClick={() => deleteResidency(residency.id)}>Remove Resident</button>
                    </p>
                    {/* {renderPayments()} */}
                    {/* <PaymentsShow payments={residency.payments}/> */}
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
            {console.log('in unitshow', units)}
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