import React from 'react';

class Home extends React.Component {
    componentDidMount() {
        if (this.props.isLoggedIn && !this.props.loading_users && !this.props.loading_units) {
            this.props.history.push(`/auth_user/${this.props.user.id}`)
        }
    }

    componentDidUpdate() {
        if (this.props.isLoggedIn && !this.props.loading_users && !this.props.loading_units) {
            this.props.history.push(`/auth_user/${this.props.user.id}`)
        }
    }

    render() {
        return (
            <>
                <h1>Welcome to Luna's Cabins</h1>
                <p>Please Login/Register to continue!</p>
            </>
        )
    }

    
}

export default Home;