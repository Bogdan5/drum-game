import React, { Component } from 'react';
import { drumBeat, sliderMove, startGame, bankChange } from '../actions/actions.js';
import { connect } from 'react-redux';
import '../App.css';

class ButtonSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClass: 'start-button' };
  }

  startClick = (event) => {
    // let purpose = this.props[purpose];
    let actionType = this.props.actionDispatched;
    console.log(this.props.gameStarted);
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

const mapStateToProps = (state) => ({ gameStarted: state.gameStarted });

const mapDispatchToProps = (dispatch) => ({
    starts: (gameStarted) => { dispatch(startGame(gameStarted)); },
  });

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => (
    { start: propsFromDispatch.starts(propsFromState.gameStarted) }
  );

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSlider);
