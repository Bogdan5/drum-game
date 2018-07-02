import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drumBeat } from '../actions/actionCreators.js';
import '../App.css';

class DrumPad extends Component {
  playSound = () => {
    let elem = document.getElementById(this.props.name);
    elem.volume = this.props.volume;
    this.props.gameStarted && elem.play();
    this.props.gameStarted && this.props.clickDrum(this.props.id);
  };

  render() {
    return (
      <div className="drum-pad" onClick={this.playSound}>
        {this.props.name}
        <audio src={this.props.url} className="clip" id={this.props.name}></audio>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  volume: state.position,
  gameStarted: state.gameStarted,
});

const mapDispatchToProps = (dispatch) => ({
  clickDrum: (id) => {
    dispatch(drumBeat(id));
  }, });

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
