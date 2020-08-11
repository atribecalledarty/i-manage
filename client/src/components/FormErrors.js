import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../utilities/dispatchActions';
import './FormErrors.css';

class FormErrors extends React.Component {
    componentWillUnmount() {
        this.props.clearErrors();
    }
    
    render() {
        return <ul className="formErrors">
                {this.props.errors?.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
    }
}

const mapState = state => ({ errors: state.errors })

export default connect(mapState, { clearErrors })(FormErrors);