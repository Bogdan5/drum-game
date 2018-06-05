import React, { Component } from 'react';
import SquareButton from './SquareButton.js';
import './App.css';

class SliderButton extends Component {
  render() {
    return (
      <div className="slider-button">
        <SquareButton/>
        <SquareButton/>
      </div>
    );
  }
}

export default SliderButton;
