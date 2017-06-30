import React, { Component } from 'react';
import './App.css';
import UserDetails from './containers/user_detail';

import UsersList from './containers/users_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersList />
        <UserDetails />
      </div>
    );
  }
}

export default App;
