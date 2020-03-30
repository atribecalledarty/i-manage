import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

class UnitsList extends React.Component {
    renderUser = unit => {
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

    clickHandler = unit => {
        this.props.history.push(`/units/${unit.id}`)
    }

    renderUnits = () => {
        return (
            this.props.units.map(unit =>
                <div key={unit.id}> 
                    <ListGroup.Item action onClick={() => this.clickHandler(unit)}>#{unit.unit_number} {this.renderUser(unit)}</ListGroup.Item> 
                </div>
            )
        )
    }


    
    render() {
        return (
            <ListGroup>
                {this.renderUnits()}
            </ListGroup>
        )
    }   
}

export default UnitsList