import React, { Component } from 'react';
import './App.css';
import UserDetails from './containers/user_detail';

import UsersList from './containers/users_list';
import ProjectsList from './containers/projects_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersList />
        <UserDetails />
        <ProjectsList />
      </div>
    );
  }
}

export default App;
