import React from 'react';
import { connect } from 'react-redux';
import { clearErrors } from '../utilities/dispatchActions';

class FormErrors extends React.Component {
    componentWillUnmount() {
        this.props.clearErrors();
    }
    
    render() {
        return (
            <ul id="error-list">
                {this.props.errors?.map((error, i) => <li className='error' key={i}>{error}</li>)}
            </ul>
        )
    }
}

const mapState = state => ({
    errors: state.errors
})

const mapDispatch = dispatch => ({
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapState, mapDispatch)(FormErrors);