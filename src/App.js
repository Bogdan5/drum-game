import React, { Component } from 'react';
import Display from './components/Display.js';
import DrumPad from './components/DrumPad.js';
import ButtonSlider from './components/ButtonSlider.js';
import Slider from './components/Slider.js';
import './App.css';
import { connect } from 'react-redux';
import { drumBeat } from './actions/actionCreators.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { drumPads: [
      { id: 1, name: 'Q', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        message1: 'Heater-1', message2: 'Chord-1', },
      { id: 2, name: 'W', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        message1: 'Heater-2', message2: 'Chord-2', },
      { id: 3, name: 'E', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        message1: 'Heater-3', message2: 'Chord-3', },
      { id: 4, name: 'A', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        message1: 'Heater-4', message2: 'Shaker', },
      { id: 5, name: 'S', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        message1: 'Clap', message2: 'Open-HH', },
      { id: 6, name: 'D', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        message1: 'Open-HH', message2: 'Closed-HH', },
      { id: 7, name: 'Z', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        message1: "Kick-n/'-Hat", message2: 'Punchy-Kick', },
      { id: 8, name: 'X', url1: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        message1: 'Kick', message2: 'Side-Stick', },
      { id: 9, name: 'C', url1: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        url2: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        message1: 'Closed-HH', message2: 'Snare', },
    ],
    };
  };

  //when bank is changed, the display is reset to blank
  componentDidUpdate(prevProps) {
    this.props.bank !== prevProps.bank && this.props.reset();
  }

  render() {
    //establishes the message in Display based on bank
    let displayMessage;
    if (this.props.drumClicked && this.props.started && !this.state.bankUpdated) {
      displayMessage = this.props.bank ? this.state.drumPads[this.props.drumClicked - 1].message1
      : this.state.drumPads[this.props.drumClicked - 1].message2;
    } else {
      displayMessage = '';
    };

    return (
        <div id="drum-machine" className="drum-machine">
          {/* the 9 drumpads */}
          <div className="button-group">
            {this.state.drumPads.map((item, index)=><DrumPad key={index} clicker={this.drumBeat}
            url={this.props.bank ? item.url1 : item.url2 }
            name={item.name} id={item.id}/>)};
          </div>
          <div className="display-container">
            {/* slider button that starts game */}
            <ButtonSlider purpose="gameStarted" actionDispatched="startGame" label="Start game"/>
            {/* type of drum clicked */}
            <Display message={displayMessage}/>
            {/* slider that sets volume */}
            <Slider/>
            {/* slider button that changes bank */}
            <ButtonSlider purpose="bank" actionDispatched="bankChange" label="Bank"/>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  started: state.gameStarted,
  drumClicked: state.drumClicked,
  bank: state.bank,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(drumBeat(null)),//resets the drumClicked clicked to null when bank changed
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
