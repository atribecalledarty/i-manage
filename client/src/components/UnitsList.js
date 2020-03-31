import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const UnitsList = ({ history, units}) => {
    const renderUser = unit => {
        if (unit.resident !== undefined) {
            return (
                <>- {unit.resident.first_name} {unit.resident.last_name}</>
            )
        } else {
            return (
                <>- <span class="text-info">Vacant</span></>
            )
        }
    }

    const clickHandler = unit => {
        history.push(`/units/${unit.id}`)
    }

    const renderUnits = units.map(unit =>
                <div key={unit.id}> 
                    <ListGroup.Item action onClick={() => clickHandler(unit)}>#{unit.unit_number} {this.renderUser(unit)}</ListGroup.Item> 
                </div>
            )

    return (
        <ListGroup>
            {renderUnits}
        </ListGroup>
        )
}

export default UnitsList