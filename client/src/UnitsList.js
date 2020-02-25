import React from 'react';
import { Link } from 'react-router-dom';

const UnitsList = ({ units }) => {

    const renderUnits = units.map(unit =>
        <div key={unit.id}> 
            <Link to={`/units/${unit.id}`}>#{unit.unit_number}</Link>  
            &nbsp;{unit.resident.first_name} {unit.resident.last_name}
        </div>
    );
    
    return (
        <div>
            {renderUnits}
        </div>
    )
}

export default UnitsList