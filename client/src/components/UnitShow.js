import React from 'react';
import { returnFormattedDate } from '../utilities/utilityFunctions';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import NewResidencyForm from './NewResidencyForm';


const UnitShow = ({ match, units, deleteResidency, addResidency, usersWithoutResidency }) => {
    const unit = units.find(unit => unit.id === Number(match.params.unitId))


    const renderResidencyInfo = () => {
        if (unit.residency !== undefined) {
            return (
                <div>
                    <p>
                        <span id="resident-name"><Link to={`/users/${unit.resident.id}`}>{unit.resident.first_name} {unit.resident.last_name}</Link></span><br/>
                        Resident Since {returnFormattedDate(unit.residency.start_date)}<br/>
                        {unit.resident.email} | {unit.resident.phone_number}<br/><br/>
                        <Button size="sm" variant="outline-danger" onClick={() => deleteResidency(unit.residency.id)}>Remove Resident From Unit</Button>
                    </p>
                </div>
            )
        } else {
            return (
                <Link to={`/units/${match.params.unitId}/residents/new`}>Add Existing User to Unit</Link>
            )
        }
    }

    const renderUnitInfo = () => {
        if (unit !== undefined) {
            return (
                <>
                    <h3>Unit {unit.unit_number}</h3>
                    <p>
                        <i>{unit.type_of_unit}<br/>
                        {unit.sq_ft} sq ft<br/>
                        ${unit.rent_cost_per_month}/month</i>
                    </p>
                    {renderResidencyInfo()}
                </>
            )
        }
    }

    return (
        <div id="unit-show">
            {/* {console.log('in unitshow', units)} */}
            {renderUnitInfo()}
            
            <Route path={`/units/:unitId/residents/new`} render={routerProps => 
                    <NewResidencyForm 
                        {...routerProps} 
                        addResidency={addResidency}
                        usersWithoutResidency={usersWithoutResidency}/>}/>
        </div>  
    )
}

export default UnitShow;