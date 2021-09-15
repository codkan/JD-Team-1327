import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      sec: 0,
      msec: 0,
      isOn: true,
    };
  }

  //careful. May cause memory leaks
  // starts and stops the timer when needed
  handleTimer = () => {
    if (this.props.final == true && this.state.isOn == true) {
      this.props.timeToStatusBar(this.state);
    }
    if (this.props.paused == true && this.state.isOn == true) {
      this.pauseTimer();
      this.setState({ isOn: false });
    }
    if (this.props.paused == false && this.state.isOn == false) {
      this.startTimer();
      this.setState({ isOn: true });
    }
  };

  //calls function every 1 msec
  //to increment state. Carry over
  //when needed
  startTimer = () => {
    this.interval = setInterval(() => {
      if (this.state.msec !== 99) {
        this.setState({
          msec: this.state.msec + 1,
        });
      } else if (this.state.sec !== 59) {
        this.setState({
          msec: 0,
          sec: ++this.state.sec,
        });
      } else {
        this.setState({
          msec: 0,
          sec: 0,
          min: ++this.state.min,
        });
      }
    }, 1);
  };

  // clear the interval function controlling the timer
  pauseTimer = () => {
    clearInterval(this.interval);
  };

  // when component loads start time
  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(props) {
    this.handleTimer();
  }

  // when the component shuts down
  // reset the state and clear the interval
  componentWillUnmount() {
    this.pauseTimer();
    this.setState({
      min: 0,
      sec: 0,
      msec: 0,
      isOn: false,
    });
  }

  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white" }}>{this.state.min}:</Text>
        <Text style={{ color: "white" }}>{this.state.sec}:</Text>
        <Text style={{ color: "white" }}>{this.state.msec}</Text>
      </View>
    );
  }
}
