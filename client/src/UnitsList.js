import React, { Component } from 'react';
// import Unit from './Unit';

const UnitsList = ({ units }) => {
    const renderUnits = Object.keys(units).map(unitId => 
        <Link key={unitId} to={`/movies/${unitId}`}>{units[unitId].unit_number}</Link>
    );
    
    return (
        <div>
            {renderUnits}
        </div>
    )
}

export default UnitsList