/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from "react";
import logo from "./logo.svg";
import "./App.css";

const yourAge = 29;

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Your age is {yourAge}</p>
      </div>
    );
  }
}

export default App;
