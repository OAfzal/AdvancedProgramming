import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import  Input from './input';
import Clock from './Clock';



class App extends React.Component {

  constructor(props){

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.initCountD = this.initCountD.bind(this);
    this.tick = this.tick.bind(this)

    this.state = {
      seconds : '00',
      minutes : ''
    };

  }

  handleChange(event){
    this.setState({
      minutes:event.target.value
    })
  }


  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    
    this.setState({
      minutes: min,
      seconds: sec
    })
    
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    
    if (min < 10) {
      this.setState({
        value: "0" + min,
      })
    }
    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--
  }


  initCountD(){
    console.log("Babu");
    this.intervalHandle = setInterval(this.tick,1000);
    let time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }


  render(){
    return (
    <div>
      <Input minutes = {this.state.minutes} handleChange = {this.handleChange} />
      <Clock minutes = {this.state.minutes} seconds = {this.state.seconds} />
      <StartButton onClick={this.initCountD}/>
    </div>)
  }

}


class StartButton extends React.Component {
  
  constructor(props){
    super(props);
    console.log(props.onClick);
  }
  
  render() {
    return (
      <button onClick={this.props.onClick}>Start</button>
    );
  }
}



export default App;
