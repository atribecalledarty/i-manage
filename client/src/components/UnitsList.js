import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const UnitsList = ({ units, history }) => {
    const renderUser = unit => {
        if (unit.resident !== undefined) {
            return (
                <>- {unit.resident.first_name} {unit.resident.last_name}</>
            )
        } else {
            return (
                <>- Vacant</>
            )
        }
    }

    const clickHandler = unit => {
        history.push(`/units/${unit.id}`)
    }

    const renderUnits = units.map(unit =>
        <div key={unit.id}> 
            {/* <Link to={`/units/${unit.id}`}>#{unit.unit_number}</Link>   */}
            {/* &nbsp;{renderUser(unit)} */}
            <ListGroup.Item action onClick={() => clickHandler(unit)}>#{unit.unit_number} {renderUser(unit)}</ListGroup.Item> 
        </div>
    );


    
    return (
        <ListGroup>
            {renderUnits}
        </ListGroup>
    )
}

export default UnitsList