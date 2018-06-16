import React, { Component } from 'react';
import SquareButton from './SquareButton.js';
import './App.css';

class SliderButton extends Component {
  dragStart = (evt) => {

  };

  dragEnd = (evt) => {

  };

  render() {
    return (
      <div className="slider-button" draggable="true" onDragEnd={this.dragEnd}
            onDragStart={this.dragStart}></div>
    );
  }
}

export default SliderButton;
