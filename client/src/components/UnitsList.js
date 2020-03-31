import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

class UnitsList extends React.Component {
    componentDidMount(){
        if (this.props.units) {
            this.props.history.push(`/units/${this.props.units[0].id}`)
        }
    }

    componentDidUpdate(prevProps){ //need both because initial loading of units will not have units loaded into props
        if (prevProps.units !== this.props.units) {
            this.props.history.push(`/units/${this.props.units[0].id}`)
        }
    }

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
                    {/* <ListGroup.Item action onClick={() => this.clickHandler(unit)}>#{unit.unit_number} {this.renderUser(unit)}</ListGroup.Item>  */}
                    <ListGroup.Item action eventKey={`/units/${unit.id}`}>#{unit.unit_number} {this.renderUser(unit)}</ListGroup.Item> 
                </div>
            )
        )
    }


    
    render() {
        return (
            <ListGroup defaultActiveKey={`/units/${this.props.units[0].id}`} onSelect={selectedKey => this.props.history.push(selectedKey)}>
                {this.renderUnits()}
            </ListGroup>
        )
    }   
}

export default UnitsList