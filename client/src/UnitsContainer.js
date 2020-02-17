import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUnits } from './unitsAction';

class UnitsContainer extends Component {
    componentDidMount(){
        this.props.fetchUnits();
    }

    render() {
        return(
            <div>
                I am UnitsContainer component!
                {console.log(this.props.units)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUnits: () => dispatch(fetchUnits())
    }
}

const mapStateToProps = state => {
    return {
        units: state.units
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitsContainer);