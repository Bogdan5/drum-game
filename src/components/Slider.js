import React, { Component } from 'react';
import '../App.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { start: false, position: 0, left: 0 };
  }

  start = () => {
    console.log('start');
    !this.state.start && this.setState({ start: true });
  };

  end = () => {
    console.log('end');
    this.state.start && this.setState({ start: false });
  };

  moving = (event) => {
    if (this.state.start) {
      this.positionSetter(event);
    }
  };

  click = (event) => {
    this.positionSetter(event);
  };

  positionSetter = (event) => {
    let inputRect =  this.refs.sliderCont.getBoundingClientRect();
    let dist = event.clientX - inputRect.left - 10;
    console.log(event.clientX, dist, this.state.start);
    dist >= 0 && dist < 200 && this.setState({ position: dist });
  };

  render() {
    return (
      <div className="slider-container" ref="sliderCont" onMouseLeave={this.end}
        onClick={this.click}>
        <div style={{ left: this.state.position }} className="slider-button"
          onMouseDown={this.start} onMouseUp={this.end} onMouseMove={this.moving}></div>
      </div>
    );
  }
}

export default Slider;
