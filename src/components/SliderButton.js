import React, { Component } from 'react';
import DrumPad from './components/DrumPad.js';
import './App.css';

class DrumPad extends Component {
  render() {
    return (
      <div className="drum-pad">
        <div id="display"></div>
      </div>
    );
  }
}

export default DrumPad;
