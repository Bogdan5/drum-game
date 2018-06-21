import React, { Component } from 'react';
import './App.css';

class StartSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClass: 'start-button' };
  }

  startClick = (event) => {
    event.stopPropagation();
    this.setState({ buttonClass: this.props.gameStarted ?
      'start-button animate-right-start-button' : 'start-button animate-left-start-button', });
    this.props.start();
  };

  render() {
    return (
      <div className="start-container" onClick={this.startClick}>
        <div className={this.state.buttonClass}></div>
      </div>
    );
  }
}

const maptStateToProps = (state) => ({ gameStarted: state.gameStarted });

const mapDispatchToProps = (dispatch) => ({
  start: () => { dispatch(startGame(!this.props.gameStarted)); },
});

export default StartSlider;
