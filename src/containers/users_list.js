import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
    componentDidMount() {
        this.setState({
            users: this.props.fetchUsers()
        });
    };

    renderUsers(users) {
        if(!users) return <i>Loading...</i>
        return (
            <ul>
                {users.map(user => <li key={user.name}>{user.name}</li>)}
            </ul>
        );
    };
    
    render() {
        return(
            <div>
                <h1>Users</h1>
                { this.renderUsers(this.props.users) }
            </div>
        );
    };
};

function mapStateToProps({ users }) {
    return { users }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUsers }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);