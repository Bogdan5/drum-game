import React, { Component } from 'react';
import * as actionCreators from '../actions/actionCreators.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';

class ButtonSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClass: 'start-button' };
  }

  startClick = (event) => {
    event.stopPropagation();
    console.log('gameStarted', this.props[this.props.purpose]);
    this.props['do' + this.props.purpose]();

    this.setState({ buttonClass: !this.props[this.props.purpose] ?
      'start-button animate-right-start-button' : 'start-button animate-left-start-button',
    });
    console.log('btClass', this.state.buttonClass);
    console.log('gameStarted2', this.props[this.props.purpose]);
  };

  render() {
    console.log('render', this.state.buttonClass);
    return (
      <div className="start-container" onClick={this.startClick}>
        <div className={this.state.buttonClass}></div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  [ownProps.purpose]: state[ownProps.purpose],
  purpose: ownProps.purpose,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ['dispatch' + ownProps.purpose]: (gameStarted) => {
    this.boundActionCreators = bindActionCreators(actionCreators, dispatch);
    dispatch(this.boundActionCreators[ownProps.actionDispatched](gameStarted));
  },
});

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => (
    {
      ...propsFromState,
      ...propsFromDispatch,
      ['do' + ownProps.purpose]: () =>
      propsFromDispatch['dispatch' + ownProps.purpose](propsFromState[ownProps.purpose]),
    }
  );

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ButtonSlider);
