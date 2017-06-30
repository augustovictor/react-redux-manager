import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        const user = this.props.user;
        if(!user) return <i>No user selected.</i>
        return (
            <div>
                <h3>Details</h3>
                <p>Name: { user.name }</p>
                <p>Hobby: { user.hobby }</p>
            </div>
        );
    };
};

function mapStateToProps({ user }) {
    return { user }
}

export default connect(mapStateToProps)(UserDetail);