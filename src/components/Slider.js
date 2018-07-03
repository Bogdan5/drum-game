import React, { Component } from 'react';
import '../App.css';
import { sliderMove } from '../actions/actionCreators.js';
import { connect } from 'react-redux';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { start: false, position: 100, };
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
    this.setState({ start: false });
  };

  positionSetter = (event) => {
    let inputRect =  this.refs.sliderCont.getBoundingClientRect();
    let dist = event.clientX - inputRect.left - 10;
    console.log(event.clientX, dist, this.state.start);
    dist >= 0 && dist < 200 && this.setState({ position: dist });
    this.props.volumeChange(dist / 200);
  };

  render() {
    return (
      <div className="slider-container" ref="sliderCont" onMouseLeave={this.end}
        onClick={this.click}>
        <div style={{ left: this.state.position }} className="slider-button"
          onMouseDown={this.start} onMouseUp={this.end} onMouseMove={this.moving}
          onMouseLeave={this.end}></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  volumeChange: (position) => dispatch(sliderMove(position)),
});

export default connect(null, mapDispatchToProps)(Slider);
