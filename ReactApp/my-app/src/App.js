import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h1> Hello World! </h1>
        </div>
        <div className="Form">
          <form>
            <label>
              Nome: <input type="text" name="nome"/>
            </label>
            <input type="submit" value="Cadastrar"/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
