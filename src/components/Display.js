import React, { Component } from 'react';
import '../App.css';

class Display extends Component {
  render() {
    return (
      <div id="display" className="Display">
        {this.props.message}
      </div>
    );
  }
}

export default Display;
