import React from 'react';
import { Link } from 'react-router-dom';
import { calculateBalance } from '../../utilities/utilityFunctions';
import { returnFormattedDate } from '../../utilities/utilityFunctions';
import { Button } from 'react-bootstrap';

function UnitShowResidency({ unit, match, deleteResidency }) {
    return <div>
        {unit.residency ? <div>
            <div className="unitShow__residentName">
                <Link to={`/users/${unit.resident.id}`}>{unit.resident.first_name} {unit.resident.last_name}</Link>
            </div>
            <div>
                <b>Balance</b> <small>$</small><strong>{calculateBalance(unit.residency, unit.rent_cost_per_month)}</strong>
            </div>
            <div className="unitShow__residentInfo">
                Resident since {returnFormattedDate(unit.residency.start_date)}<br/>
                {unit.resident.email} | {unit.resident.phone_number}
            </div>
            <Button size="sm" variant="outline-danger" onClick={() => deleteResidency(unit.residency.id)}>Remove Resident From Unit</Button>
        </div>
            :
        <Link to={`/units/${match.params.unitId}/residents/new`}>Add Existing User to Unit</Link>}
    </div>
}

export default UnitShowResidency;