import React, { Component } from 'react';
import * as actionCreators from '../actions/actionCreators.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../App.css';

class ButtonSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClass: 'slider-button' };
  }

  //toggles start/stop games
  startClick = (event) => {
    event.stopPropagation();
    this.props['do' + this.props.purpose]();
    this.setState({ buttonClass: !this.props[this.props.purpose] ?
      'slider-button animate-right-slider-button' : 'slider-button animate-left-slider-button',
    });
  };

  render() {
    return (
      <div className="ButtonSlider">
        <p>{this.props.label}</p>
        <div className="slider-button-container" onClick={this.startClick}>
          <div className={this.state.buttonClass}></div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  [ownProps.purpose]: state[ownProps.purpose],//the purpose variable that is changed
  purpose: ownProps.purpose,//the purpose variable
  label: ownProps.label,//label before slider container
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  ['dispatch' + ownProps.purpose]: (gameStarted) => {
    this.boundActionCreators = bindActionCreators(actionCreators, dispatch);
    dispatch(this.boundActionCreators[ownProps.actionDispatched](gameStarted));
  },//the actionDispatched prop bound as an action creator
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
