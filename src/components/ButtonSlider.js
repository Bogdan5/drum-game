import React, { Component } from 'react';
import './App.css';

class ButtonSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { buttonClass: 'start-button' };
  }

  startClick = (event) => {
    let purpose = this.props.purpose;
    let actionType = this.props.actionDispatched;
    event.stopPropagation();
    this.setState({ buttonClass: this.props[{ purpose }] ?
      'start-button animate-right-start-button' : 'start-button animate-left-start-button', });
    this.props.start();//pass this function as a prop
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
  start: () => { dispatch(startGame(!this.props.gameStarted)); },//this function as a prop
});

export default connect(maptStateToProps, mapDispatchToPropss)(ButtonSlider);
