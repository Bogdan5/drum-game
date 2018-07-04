import React, { Component } from 'react';
import '../App.css';

class Display extends Component {
  render() {
    console.log('props.message', this.props.message);
    return (
      <div id="display" className="Display">
        {this.props.message}
      </div>
    );
  }
}

export default Display;
