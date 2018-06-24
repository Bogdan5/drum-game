import React, { Component } from 'react';
import './App.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { start: false, position: 0, left: 0 };
  }

  start = () => {
    this.setState({ start: true });
  };

  end = () => {
    this.setState({ start: false });
  };

  // moving = () => {
  //   // if (this.state.start) {
  //     //change ref
  //     // let inputRect =  ReactDOM.findDOMNode(this.refs['sliderButton'])
  //     // .getBoundingClientRect();
  //     // this.setState({ position: event.clientX - inputRect.left });
  //   // }
  // };

  render() {
    return (
      <div className="slider-container">
        //change ref from string to function
        <div ref="sliderButton" style={this.state.left} className="slider-button"
          onMouseDown={this.start} onMouseUp={this.end} onMouseMove={this.moving}></div>
      </div>
    );
  }
}

export default Slider;
