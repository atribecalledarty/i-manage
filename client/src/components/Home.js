import React from 'react';

class Home extends React.Component {

    componentDidUpdate() {
        if (this.props.isLoggedIn && !this.props.loading_users && !this.props.loading_units) {
            this.props.history.push(`/auth_user/${this.props.user.id}`)
        }
    }

    render() {
        return (
            <p>Please Login/Register to continue!</p>
        )
    }

    
}

export default Home;