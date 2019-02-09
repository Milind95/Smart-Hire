import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar/calendar';

class App extends Component {
  render() {
    return (
      <div className="container marginTop">
        <Calendar />
      </div>
    );
  }
}

export default App;
