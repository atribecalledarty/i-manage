import React from 'react';
import { Link } from 'react-router-dom';

const UnitsList = ({ units }) => {
    const renderUnits = units.map(unit =>
        <div> 
            <Link key={unit.id} to={`/movies/${unit.id}`}>{unit.unit_number}</Link> - 
            
        </div>
    );
    
    return (
        <div>
            I am UnitsList component!
            {renderUnits}
        </div>
    )
}

export default UnitsList