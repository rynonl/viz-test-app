import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.welcome || "Welcome to test app"}</h1>
        </header>
        <p className="App-intro">
          To gget started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
