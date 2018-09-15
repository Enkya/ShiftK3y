import React, { Component } from 'react';
import logo from './assets/images/ucclogo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ShiftK3y</h1>
        </header>
      </div>
    );
  }
}

export default App;
