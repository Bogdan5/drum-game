import React, { Component } from 'react';
import Display from './components/Display.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { drumPads: [
      { name: 'q' },
      { name: 'w' },
      { name: 'e' },
      { name: 'a' },
      { name: 's' },
      { name: 'd' },
      { name: 'z' },
      { name: 'x' },
      { name: 'c' },
    ], };
  };

  render() {
    return (
      <div id="drum-machine" className="Display">
        {this.state.drumPads.map((item, index)=><DrumPad/>)}
        <div id="display">
          <SliderButton/>
          <Display/>
          <Slider/>
          <SliderButton/>
        </div>
      </div>
    );
  }
}

export default App;
