import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Practice from './practice';
import Profile from './prof'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Practice />
        <Profile />
      </div>
    );
  }
}

export default App;
