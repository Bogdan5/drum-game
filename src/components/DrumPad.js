import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drumBeat, sliderMove, startGame, bankChange } from '../actions/actions.js';
import '../App.css';

class DrumPad extends Component {
  playSound = () => {
    let elem = document.getElementById(this.props.name);
    elem.volume = 0.1;
    elem.play();
    this.props.clickDrum(this.props.id);
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

// const mapStateToProps = (state) => ({ nameButton: state.nameButton });

const mapDispatchToProps = (dispatch) => ({
  clickDrum: (id) => {
    dispatch(drumBeat(id));
  }, });

export default connect(null, mapDispatchToProps)(DrumPad);
