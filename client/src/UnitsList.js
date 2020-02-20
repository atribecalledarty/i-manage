import React from 'react';
import { Link } from 'react-router-dom';

const UnitsList = ({ units }) => {

    const renderUnits = units.map(unit =>
        <div key={unit.id}> 
            <Link to={`/units/${unit.id}`}>Unit {unit.unit_number}</Link>  
            &nbsp;{unit.resident.first_name} {unit.resident.last_name}
            {/* <Link 
                key={unit.resident.id} 
                to={`/units/users/${unit.resident.id}`}
            >
                    {unit.resident.first_name} {unit.resident.last_name}
            </Link> */}
        </div>
    );
    
    return (
        <div>
            {/* I am UnitsList component! */}
            {renderUnits}
        </div>
    )
}

export default UnitsList