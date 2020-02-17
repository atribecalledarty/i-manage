import React, { Component } from 'react';
import Unit from './Unit';

class UnitsList extends Component {
    renderUnits = () => {
        return (
            this.props.units.map(unit => <Unit unitInfo={unit} />)
        )
    }

    render() {
        return(
            <div>
                I am UnitsList Component!
                <ul>
                    {console.log('this is in unitslists', this.props.units)}
                    {this.renderUnits()}
                </ul>
            </div>
        )
    }
}

export default UnitsList