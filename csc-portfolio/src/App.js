import React, { Component } from 'react';
// import logo from './logo.svg';
// import headshot from './headshot.jpg';
import './App.css';
import { FixedNav, Home, CardRack, Contact } from './components/'
import { Button } from '@chakra-ui/core'
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
      <>  
        <FixedNav/>
        <Home/>
        <CardRack/>
        <CardRack/>
        <Contact/>
      </>
      
    )
  }
}

export default App;
