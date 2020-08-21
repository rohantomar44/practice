import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="max" age="28"/>
        <Person name="manu" age="29"> My hobbies: Racing</Person>
        <Person name="stephnie" age="26" /> 
      </div>
    );
  }
}

export default App;
