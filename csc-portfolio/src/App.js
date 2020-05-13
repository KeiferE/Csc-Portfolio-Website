import React, { Component } from 'react';
import logo from './logo.svg';
import headshot from './headshot.jpg';
import './App.css';
import Sidebar from './components/sidebar';
import './components/css/Sidebar.css';

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
      
      <div id="App">
       <div id="container-wrap">
        <Sidebar />
        <div id ="page-wrap">
          <h1 className="App-name"> Keifer Edelmayer</h1>
          <img src={headshot} className="App-headshot" />
          <h1 className="App-projects">Projects</h1>
          <h1 className="App-about">About</h1>
          <p className="App-slogan">Hi, I'm Keifer. I like to create, solve problems, and go hiking</p>
          <div className="App-longdash"></div>
          <p className="App-title">Developer</p>
          <p>This will be the contact comp</p>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
