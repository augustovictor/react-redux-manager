import React, { Component } from 'react';
import './App.css';

import UsersList from './containers/users_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersList />
      </div>
    );
  }
}

export default App;
