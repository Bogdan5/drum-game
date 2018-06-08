import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class DrumPad extends Component {
  playSound = () => document.getElementById(this.props.letter).play();

  render() {
    return (
      <div className="drum-pad" onClick={this.playSound}>
        {this.props.letter}
        <audio src={this.props.url} className="clip" id={this.props.letter}></audio>
      </div>
    );
  }
}

const mapStateToProps = (state) => { nameButton: state.nameButton };

const mapDispatchToProps = (duspatch) => {
  
}

export default (mapStateToProps)(DrumPad);
