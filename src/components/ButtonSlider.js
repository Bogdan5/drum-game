import React, { Component } from 'react';
import { drumBeat, sliderMove, startGame, bankChange } from '../actions/actions.js';
import { connect } from 'react-redux';
import '../App.css';

class ButtonSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClass: 'start-button', startedLocal: false, };
  }

  startClick = (event) => {
    // let purpose = this.props[purpose];
    let actionType = this.props.actionDispatched;
    console.log(this.props.gameStarted, this.state.startedLocal);
    event.stopPropagation();
    this.setState({ buttonClass: this.props.startedLocal ?
      'start-button animate-right-start-button' : 'start-button animate-left-start-button',
      startedLocal: !this.state.startedLocal,
    });
    this.props.starts();
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

const mapDispatchToProps = (dispatch) => ({ starts: (isStarted) => {
    dispatch(startGame(this.state.startedLocal));
  },
});

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => (
//     { starts: propsFromDispatch.starts(propsFromState.gameStarted) }
//   );

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSlider);
