import React, { Component } from 'react';

class UnitsList extends Component {
    renderUnits = () => {
        return (
            this.props.units(unit => <Unit unitInfo={unit} />)
        )
    }

    render() {
        return(
            <div>
                I am UnitsList Component!
                <ul>
                    {this.renderUnits()}
                </ul>
            </div>
        )
    }
}

export default UnitsList