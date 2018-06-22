import React, { Component } from 'react';
import Display from './components/Display.js';
import DrumPad from './components/DrumPad.js';
import store from './store/';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { drumPads: [
      { name: 'q', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        message: 'Heater-1', },
      { name: 'w', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        message: 'Heater-2', },
      { name: 'e', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        message: 'Heater-3', },
      { name: 'a', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        message: 'Heater-4', },
      { name: 's', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        message: 'Clap', },
      { name: 'd', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        message: 'Open-HH', },
      { name: 'z', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        message: "Kick-n/'-Hat", },
      { name: 'x', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        message: 'Kick', },
      { name: 'c', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        message: 'Closed-HH', },
    ], };
  };

  drumBeat = (letter) => {

  };

  render() {
    return (
      <Provider store={store}>
        <div id="drum-machine" className="drum-machine">
          <div className="button-group">
            {this.state.drumPads.map((item, index)=><DrumPad clicker={this.drumBeat}
            url={item.url} message={item.message} store={store}/>)};
          </div>
          <div className="display">
            <SliderButton/>
            <Display/>
            <Slider/>
            <SliderButton/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
