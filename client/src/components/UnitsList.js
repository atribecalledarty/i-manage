import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';

const UnitsList = ({ units }) => {
    const renderUser = unit => {
        if (unit.resident !== undefined) {
            return (
                <>{unit.resident.first_name} {unit.resident.last_name}</>
            )
        } else {
            return (
                <>-</>
            )
        }
    }

    const renderUnits = units.map(unit =>
        <div key={unit.id}> 
            <Link to={`/units/${unit.id}`}>#{unit.unit_number}</Link>  
            &nbsp;{renderUser(unit)}
        </div>
    );


    
    return (
        <div>
            {renderUnits}
        </div>
    )
}

export default UnitsList