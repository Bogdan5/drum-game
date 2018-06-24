import React, { Component } from 'react';
import { connect } from 'react-redux';
import { drumBeat, sliderMove, startGame, bankChange } from '../actions/actions.js';
import '../App.css';

class DrumPad extends Component {
  playSound = () => {
    document.getElementById(this.props.letter).play();
    this.props.clickDrum(this.props.letter);
  };

  render() {
    return (
      <div className="drum-pad" onClick={this.playSound}>
        {this.props.letter}
        <audio src={this.props.url} className="clip" id={this.props.letter}></audio>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ nameButton: state.nameButton });

const mapDispatchToProps = (dispatch) => {
  clickDrum: (name) => {
    dispatch(drumBeat(name));
  };
};

export default connect(mapDispatchToProps)(DrumPad);
