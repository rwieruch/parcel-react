import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" onClick={() => this.setState({ counter: 2 })}>
          To get started, edit <code>src/App.js</code> and save to reload. {this.state.counter}
        </p>
      </div>
    );
  }
}

export default App;
