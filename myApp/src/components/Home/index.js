import React, { Component } from 'react';
import logo from './keyword.png';
import './style.css';

class App extends Component {
  render() {
    return (
    <div className="Home a">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">
            CODE SECRET
          </h1>
            <div className="bodyBtn">
            <button class="btn">REGISTER</button>
            <button class="btn">LOG IN</button>
            </div>
        </header>
    </div>
    );
  }
}

export default App;
