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
      { name: 'q', url: 'http://www.peter-weinberg.com/files/9114/8176/9796/Kick_n_Hat.wav', },
      { name: 'w', url: 'http://www.peter-weinberg.com/files/9314/8176/9796/Heater-6.wav', },
      { name: 'e', url: 'http://www.peter-weinberg.com/files/9114/8176/9796/Kick_n_Hat.wav', },
      { name: 'a', url: 'http://www.peter-weinberg.com/files/9314/8176/9796/Heater-6.wav', },
      { name: 's', url: 'http://www.peter-weinberg.com/files/9114/8176/9796/Kick_n_Hat.wav', },
      { name: 'd', url: 'http://www.peter-weinberg.com/files/9314/8176/9796/Heater-6.wav', },
      { name: 'z', url: 'http://www.peter-weinberg.com/files/9114/8176/9796/Kick_n_Hat.wav', },
      { name: 'x', url: 'http://www.peter-weinberg.com/files/9314/8176/9796/Heater-6.wav', },
      { name: 'c', url: 'http://www.peter-weinberg.com/files/9114/8176/9796/Kick_n_Hat.wav', },
    ], };
  };

  drumBeat = (letter) => {

  };

  render() {
    return (
      <Provider store={store}>
        <div id="drum-machine" className="Display">
        {this.state.drumPads.map((item, index)=><DrumPad clicker={this.drumBeat}
        url={item.url} store={store}/>)};
          <div id="display" className="display">
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
