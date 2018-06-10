import React, { Component } from 'react';
import './App.css';

class SuareButton extends Component {
  render() {
    return (
      <div className="square-button" onClick={this.props.clicked}></div>
    );
  }
}

export default SquareButton;
