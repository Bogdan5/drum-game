import React, { Component } from 'react';
import '../App.css';
import { sliderMove } from '../actions/actionCreators.js';
import { connect } from 'react-redux';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { start: false, position: 100, positionLeft: 0, };
  }

  componentDidMount() {
    let inputRect =  this.refs.sliderCont.getBoundingClientRect();
    this.setState({ positionLeft: inputRect.left });
  }

  //sets start as true and begins tracking the position of the mouse
  start = () => {
    console.log('start');
    !this.state.start && this.setState({ start: true });
  };

  //ends tracking of the mouse position
  end = () => {
    console.log('end');
    this.state.start && this.setState({ start: false });
  };

  //moves the slider button
  moving = (event) => {
    if (this.state.start) {
      this.positionSetter(event);
    }
  };

  //sets position at click - when clicked, button moved directly, not dragged
  click = (event) => {
    this.positionSetter(event);
    this.setState({ start: false });
  };

  //
  positionSetter = (event) => {
    // let inputRect =  this.refs.sliderCont.getBoundingClientRect();
    let dist = event.clientX - this.state.positionLeft - 10;//measures left distance
    dist >= 0 && dist < 200 && this.setState({ position: dist });//changes position of btn
    this.props.volumeChange(dist / 200);//changes the global volume var
  };

  render() {
    return (
      <div className="Slider">
        <p>Volume</p>
        <div className="slider-container" ref="sliderCont" onMouseLeave={this.end}
          onClick={this.click}>
          <div style={{ left: this.state.position }} className="slider-btn"
            onMouseDown={this.start} onMouseUp={this.end} onMouseMove={this.moving}
            onMouseLeave={this.end}></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  volumeChange: (position) => dispatch(sliderMove(position)),
});

export default connect(null, mapDispatchToProps)(Slider);
