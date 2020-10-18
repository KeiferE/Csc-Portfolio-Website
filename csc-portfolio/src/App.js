import React, { Component } from 'react';
// import logo from './logo.svg';
// import headshot from './headshot.jpg';
import './App.css';
// import Sidebar from './components/sidebar';
// import './components/css/Sidebar.css';

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
      
      <div>
        <nav>
          <li>Home</li>
          <li>Projects</li>
          <li>work</li>
          <li>contact</li>
        </nav>
        <div>home component</div>
        <div>work experience</div>
        <div>projects page</div>
        <div>contact</div>
      </div>
    )
  }
}

export default App;
