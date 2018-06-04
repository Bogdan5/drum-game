import React, { Component } from 'react';
import DrumPad from './components/DrumPad.js';
import './App.css';

class DrumPad extends Component {
  clicker = () => this.props.clicker(this.props.letter);

  render() {
    return (
      <div className="drum-pad" onClick={this.clicker}>
        {this.props.letter}
        <audio src={this.props.url} className="clip" id={this.props.letter}></audio>
      </div>
    );
  }
}

export default DrumPad;
