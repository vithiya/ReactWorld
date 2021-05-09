import React, { Component } from 'react';
import './App.css';
import { Profile } from './components/Profile';
import GreetComponent from './components/Greet';
import About from './components/About';
import Status from './components/Status';

class App extends Component {
    render () {
      return (
        <div className="App">
        <Profile name='Bharathi' >
          <p>Hard working Employee</p>
        </Profile>
        <GreetComponent />
        <About />
        <Status></Status>

        <Profile name='Vinay' >
          <button>Start Coding</button>
          </Profile>
          <GreetComponent />
        <About />
        <Status></Status>
        </div>
      );
    }
}
export default App;
