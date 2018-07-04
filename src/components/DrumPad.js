import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drumBeat } from '../actions/actionCreators.js';
import '../App.css';

class DrumPad extends Component {
  //plays sound and updates the drum clicked
  playSound = () => {
    let elem = document.getElementById(this.props.name);
    elem.volume = this.props.volume;//sets volume
    this.props.gameStarted && elem.play();//plays sound
    this.props.gameStarted && this.props.clickDrum(this.props.id);//sets the drum clicked
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
  gameStarted: state.gameStarted,//true if game is started
});

const mapDispatchToProps = (dispatch) => ({
  clickDrum: (id) => {
    dispatch(drumBeat(id));//sets the drum clicked number
  }, });

export default connect(mapStateToProps, mapDispatchToProps)(DrumPad);
