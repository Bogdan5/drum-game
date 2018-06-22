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
      { name: 'q', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
      : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        message: this.props.bank ? 'Heater-1' : 'Chord-1', },
      { name: 'w', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        message: this.props.bank ? 'Heater-2' : 'Chord-2', },
      { name: 'e', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        message: this.props.bank ? 'Heater-3' : 'Chord-3', },
      { name: 'a', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        message: this.props.bank ? 'Heater-4' : 'Shaker', },
      { name: 's', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        message: this.props.bank ? 'Clap' : 'Open-HH', },
      { name: 'd', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        message: this.props.bank ? 'Open-HH' : 'Closed-HH', },
      { name: 'z', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        message: this.props.bank ? "Kick-n/'-Hat" : 'Punchy-Kick', },
      { name: 'x', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        message: this.props.bank ? 'Kick' : 'Side-Stick', },
      { name: 'c', url: this.props.bank ?
      'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' :
      'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        message: this.props.bank ? 'Closed-HH' : 'Snare', },
    ], };
  };

  drumBeat = (letter) => {

  };

  render() {
    return (
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
    );
  }
}

const mapStateToProps = (state) => ({ started: state.gameStarted });

export default connect(mapStateToProps)(App);
