import React, { Component } from 'react';
import './App.css';

class Slider extends Component {
  render() {
    return (
      <div className="slider-container">
        <div className="slider-button" draggable="true" onDragEnd={this.dragEnd}
              onDragStart={this.dragStart}></div>
      </div>
    );
  }
}

export default Slider;
