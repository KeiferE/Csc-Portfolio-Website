import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  render() {
    return (
      
      <div id="colorlib-page">
       <p>This is a test</p>
       <div id="container-wrap">
        <Sidebar />
        <div id ="colorlib-main">
          <p>This will be the home comp</p>
          <p>This will be the about comp</p>
          <p>This will projects comp</p>
          <p>This will be the contact comp</p>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
