import React from 'react';
import { returnFormattedDate, calculateBalance } from '../../utilities/utilityFunctions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import NewResidencyForm from './NewResidencyForm';
import './UnitShow.css';

const UnitShow = ({ match, units, users, deleteResidency, addResidency }) => {
    const unit = units.find(unit => unit.id === Number(match.params.unitId))
    const usersWithoutResidency = users.filter(user => user.residency === undefined)

    return (
        <div className="unitShow">
            {unit && <>
                <h3 className="unitShow__header">Unit {unit.unit_number}</h3>
                <p className="unitShow__unitInfo">
                    <i>{unit.type_of_unit}<br/>
                    {unit.sq_ft} sq ft<br/>
                    ${unit.rent_cost_per_month}/month</i>
                </p>
                {unit.residency ? <div>
                    <div className="unitShow__residentName">
                        <Link to={`/users/${unit.resident.id}`}>{unit.resident.first_name} {unit.resident.last_name}</Link>
                    </div>
                    <div><b>Balance</b> <small>$</small><strong>{calculateBalance(unit.residency, unit.rent_cost_per_month)}</strong></div>
                    <div className="unitShow__residentInfo">
                    Resident since {returnFormattedDate(unit.residency.start_date)}<br/>
                    {unit.resident.email} | {unit.resident.phone_number}
                    </div>
                    <Button size="sm" variant="outline-danger" onClick={() => deleteResidency(unit.residency.id)}>Remove Resident From Unit</Button>
                </div>
                :
                <Link to={`/units/${match.params.unitId}/residents/new`}>Add Existing User to Unit</Link>}
            </>}
            
            <Route path={`/units/:unitId/residents/new`} render={routerProps => 
                    <NewResidencyForm 
                        {...routerProps} 
                        addResidency={addResidency}
                        usersWithoutResidency={usersWithoutResidency}/>}/>
        </div>  
    )
}

export default UnitShow;